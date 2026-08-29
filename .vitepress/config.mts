import { defineConfig } from 'vitepress'
import { generateSidebar, sectionEntryLink } from './sidebar.mts'

// ===========================================================================
// 站名占位常量
//
// 【想改站名？只改下面这两行就够了。】
// 全文所有出现站名的地方（浏览器标签、左上角标题、首页、footer、社交分享卡片）
// 都是引用这两个常量，改完这两行整站同步生效，不用再去别的地方翻。
//
// 首页大标题另有一份文字在根目录 index.md 里，改站名时记得一起看一眼。
// ===========================================================================
const SITE_NAME = '中国 FDE 手册'
const SITE_TAGLINE = '任鑫的企业内部 FDE 培养手册'

// GitHub 仓库地址（编辑链接、右上角图标都用它）
const REPO = 'https://github.com/ai-alchemy-lab/fde-arsenal'

export default defineConfig({
  // ---- 基础信息 -----------------------------------------------------------
  lang: 'zh-CN',
  title: SITE_NAME,
  description: SITE_TAGLINE,

  // 部署在自定义域名的根目录（比如 fde.example.com/），所以 base 就是 '/'。
  // 只有部署到 "域名/子路径/" 时才需要改成 '/子路径/'。
  base: '/',

  // ---- 不上站的内容 -------------------------------------------------------
  // srcExclude 用的是相对仓库根目录的 glob 匹配。
  srcExclude: [
    '研究弹药/**', // 内部研究素材，不公开（目前在仓库外，这里是防止哪天挪进来）
    '**/node_modules/**',
    // 根目录的 README.md 是给 GitHub 页面看的，内容和首页 index.md 重复。
    // 排除它，免得站内搜索出现两条几乎一样的结果。注意这里只写 'README.md'，
    // 只匹配根目录那一个；各章节里的 README.md（写成 '**/README.md' 才会命中）
    // 照常上站，它们是各章节的导航页。
    'README.md'
  ],

  // ---- 死链处理 -----------------------------------------------------------
  // 设为 true 的原因：库里的文件互相引用得很密，而且有不少链接指向"还没写完
  // 但迟早会有"的文件（书稿章节、建设中的工具箱等）。如果开启死链检查，
  // 每次有人新写一篇引用了未来文件的稿子，构建就会直接失败，写作节奏会被打断。
  // 这里选择让构建永远通过，代价是个别链接可能点开是 404。
  ignoreDeadLinks: true,

  // ---- 其他 ---------------------------------------------------------------
  cleanUrls: false, // 生成 xxx.html，静态托管（Vercel / GitHub Pages）兼容性最好
  lastUpdated: true, // 页面底部显示最后更新时间，取自 git 提交记录
  metaChunk: true,

  markdown: {
    lineNumbers: false
    // 中文标题锚点：VitePress 默认的 slug 生成器会保留中文字符
    // （"## 三个判断" → id="三个判断"），右侧目录跳转和 #锚点 链接都能正常工作，
    // 不需要额外配置。这里刻意不覆盖 markdown.anchor，改动它反而容易搞坏。
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    ['meta', { property: 'og:title', content: SITE_NAME }],
    ['meta', { property: 'og:description', content: SITE_TAGLINE }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  themeConfig: {
    siteTitle: SITE_NAME,

    // ---- 顶部导航 ---------------------------------------------------------
    nav: [
      { text: '首页', link: '/' },
      { text: '方法论', link: sectionEntryLink('02-方法论') },
      { text: '模板库', link: sectionEntryLink('03-模板库') },
      { text: '案例库', link: sectionEntryLink('04-案例库') },
      { text: 'GitHub', link: REPO }
    ],

    // ---- 侧边栏（自动生成，见 ./sidebar.mts）-------------------------------
    sidebar: generateSidebar(),

    // ---- 右侧文内目录 -----------------------------------------------------
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // ---- 本地搜索（不依赖任何外部服务，国内可用）---------------------------
    search: {
      provider: 'local',
      options: {
        // 默认的分词器是按空格切词的，对中文基本无效（整段中文会变成一个词）。
        // 下面的配置在每两个汉字之间都切一刀，把中文拆成单字建索引，
        // 再配合 prefix 前缀匹配 + AND 组合，搜"方法论"能正确命中。
        miniSearch: {
          options: {
            tokenize: (text: string) =>
              text
                .split(/[\n\r\p{Z}\s]+|(?<=\p{sc=Han})(?=\p{sc=Han})/gu)
                .filter(Boolean),
            processTerm: (term: string) => {
              const t = term.trim().toLowerCase()
              return t.length === 0 ? false : t
            }
          },
          searchOptions: {
            combineWith: 'AND',
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询',
            backButtonTitle: '返回',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '上箭头',
              navigateDownKeyAriaLabel: '下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'esc'
            }
          }
        }
      }
    },

    // ---- 每页底部的"在 GitHub 上编辑此页" ---------------------------------
    editLink: {
      pattern: `${REPO}/edit/main/:path`,
      text: '在 GitHub 上编辑此页'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: { dateStyle: 'medium' }
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    externalLinkIcon: true,

    socialLinks: [{ icon: 'github', link: REPO }],

    footer: {
      message:
        '内容采用 <a href="https://creativecommons.org/licenses/by/4.0/deed.zh" target="_blank" rel="noreferrer">CC BY 4.0</a> 许可，商用请注明出处。欢迎 <a href="/CONTRIBUTING.html">投稿与纠错</a>。',
      copyright: `© ${new Date().getFullYear()} 任鑫 · ${SITE_NAME}`
    }
  }
})
