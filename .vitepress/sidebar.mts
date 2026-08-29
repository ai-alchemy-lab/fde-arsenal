// ---------------------------------------------------------------------------
// 侧边栏自动生成器
//
// 目的：侧边栏不手写。这个文件在构建时扫描仓库里的目录，把每个目录下的
// markdown 文件自动变成侧边栏条目。以后往 02-方法论/ 里丢一个新 .md 文件，
// 不用改任何配置，刷新一下就出现在侧边栏里。
//
// 条目标题的取法：优先读文件里的第一个 H1（也就是 "# 开头" 的那一行），
// 读不到就退回用文件名。长标题会按下面 shortenTitle() 的规则做一次收窄，
// 免得侧边栏被一行几十个字撑爆。
// ---------------------------------------------------------------------------

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { DefaultTheme } from 'vitepress'

// 仓库根目录（.vitepress 的上一级）
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// ---------------------------------------------------------------------------
// 分组定义：想调整侧边栏的大分组顺序 / 名字，改这里就够了。
//
//   dir       —— 相对仓库根目录的文件夹名
//   text      —— 侧边栏上显示的分组标题
//   collapsed —— true 表示默认折叠起来，false 表示默认展开
//   priority  —— 可选。文件名前缀数组，写在这里的文件会被排到该组最前面，
//                并按数组里的顺序排列；没写到的文件排在后面，按中文拼音排序。
// ---------------------------------------------------------------------------
interface Section {
  dir: string
  text: string
  collapsed?: boolean
  priority?: string[]
}

const SECTIONS: Section[] = [
  { dir: '01-原典', text: '01 原典', collapsed: false },
  {
    dir: '02-方法论',
    text: '02 方法论',
    collapsed: false,
    // 培养旅程是主线，排在方法论组最前面
    priority: ['培养旅程-']
  },
  { dir: '03-模板库', text: '03 模板库', collapsed: true },
  { dir: '04-案例库', text: '04 案例库', collapsed: true },
  { dir: '05-文库', text: '05 文库', collapsed: true },
  { dir: '06-工具箱', text: '06 工具箱', collapsed: true },
  { dir: '07-情报站', text: '07 情报站', collapsed: true },
  { dir: 'book', text: '书稿', collapsed: true },
  { dir: 'course', text: '课纲', collapsed: true }
]

// 扫描时要跳过的东西
const IGNORED_DIRS = new Set(['.vitepress', '.git', 'node_modules', '研究弹药'])

// ---------------------------------------------------------------------------
// 从一个 markdown 文件里取标题
// ---------------------------------------------------------------------------
function readTitle(absFile: string): string {
  let raw = ''
  try {
    raw = fs.readFileSync(absFile, 'utf-8')
  } catch {
    return path.basename(absFile, '.md')
  }

  // 去掉文件开头的 frontmatter（--- 包起来的那一段）
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')

  // 找第一个 H1
  const match = body.match(/^#\s+(.+?)\s*$/m)
  if (!match) return path.basename(absFile, '.md')

  const cleaned = match[1]
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // [文字](链接) → 文字
    .replace(/[*_`]/g, '') // 去掉加粗 / 斜体 / 反引号
    .trim()

  return shortenTitle(cleaned) || path.basename(absFile, '.md')
}

// 标题里可以直接扔掉的前缀标签（"深度导读：Nabeel……" → "Nabeel……"）
const LABEL_PREFIXES = ['深度导读', '导读']

// 长标题收窄规则（按顺序生效）。目的只有一个：让侧边栏一行放得下，
// 同时不要把标题砍到看不出是什么。正文里的 H1 一个字都不动，只影响侧边栏。
//   1. 去掉结尾的整段（……）说明，比如 "Eval 设计卡（W1 选 尾 …）" → "Eval 设计卡"
//   2. 去掉 "深度导读：" 这类前缀标签
//   3. 遇到破折号 "——" 只取前半段
//   4. 超过 28 个字、且结尾是《原文标题》的，把书名号那截去掉
//   5. 超过 18 个字、且中间有中文冒号的，取冒号前半段（前半段短于 4 个字就不动，
//      免得砍出一个看不出所以然的残句）
function shortenTitle(title: string): string {
  let t = title.trim()

  t = t.replace(/（[^（）]*）\s*$/, '').trim()

  for (const label of LABEL_PREFIXES) {
    if (t.startsWith(label + '：')) {
      t = t.slice(label.length + 1).trim()
      break
    }
  }

  if (t.includes('——')) t = t.split('——')[0].trim()

  if (t.length > 28) {
    t = t.replace(/《[^《》]*》\s*$/, '').trim()
  }

  if (t.length > 18 && t.includes('：')) {
    const head = t.split('：')[0].trim()
    if (head.length >= 4) t = head
  }

  return t
}

// ---------------------------------------------------------------------------
// 把一个文件路径变成站点里的链接
// 例：01-原典/00-总清单.md → /01-原典/00-总清单
// ---------------------------------------------------------------------------
function toLink(relFile: string): string {
  return '/' + relFile.replace(/\\/g, '/').replace(/\.md$/, '')
}

// 同一组内文件的排序：README 永远第一，然后是 priority 里点名的，最后按中文排序
function sortFiles(files: string[], priority: string[] = []): string[] {
  const rank = (name: string): number => {
    const base = path.basename(name)
    if (/^(README|index)\.md$/i.test(base)) return -1
    const hit = priority.findIndex((p) => base.startsWith(p))
    return hit === -1 ? priority.length : hit
  }
  return [...files].sort((a, b) => {
    const ra = rank(a)
    const rb = rank(b)
    if (ra !== rb) return ra - rb
    return path.basename(a).localeCompare(path.basename(b), 'zh-Hans-CN')
  })
}

// ---------------------------------------------------------------------------
// 递归扫描一个目录，生成侧边栏条目（支持 05-文库/公司 这种二级目录）
// ---------------------------------------------------------------------------
function scanDir(relDir: string, priority?: string[]): DefaultTheme.SidebarItem[] {
  const absDir = path.join(ROOT, relDir)
  if (!fs.existsSync(absDir)) return []

  const entries = fs.readdirSync(absDir, { withFileTypes: true })

  const files = entries
    .filter((e) => e.isFile() && e.name.endsWith('.md'))
    .map((e) => path.join(relDir, e.name))

  const subDirs = entries
    .filter((e) => e.isDirectory() && !IGNORED_DIRS.has(e.name) && !e.name.startsWith('.'))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))

  const items: DefaultTheme.SidebarItem[] = sortFiles(files, priority).map((relFile) => ({
    text: readTitle(path.join(ROOT, relFile)),
    link: toLink(relFile)
  }))

  for (const sub of subDirs) {
    const children = scanDir(path.join(relDir, sub))
    if (children.length === 0) continue
    items.push({ text: sub, collapsed: false, items: children })
  }

  return items
}

// ---------------------------------------------------------------------------
// 对外导出：生成完整侧边栏
// ---------------------------------------------------------------------------
export function generateSidebar(): DefaultTheme.SidebarItem[] {
  const groups: DefaultTheme.SidebarItem[] = []

  for (const section of SECTIONS) {
    const items = scanDir(section.dir, section.priority)
    if (items.length === 0) continue
    groups.push({
      text: section.text,
      collapsed: section.collapsed ?? true,
      items
    })
  }

  return groups
}

// 顶部导航里"方法论 / 模板库 / 案例库"要跳到哪一页：
// 有 README.md 就跳 README，没有就跳该目录下排第一的文件。
export function sectionEntryLink(dir: string): string {
  const absDir = path.join(ROOT, dir)
  if (fs.existsSync(path.join(absDir, 'README.md'))) return `/${dir}/README`
  const items = scanDir(dir)
  const first = items.find((i) => i.link)
  return first?.link ?? '/'
}
