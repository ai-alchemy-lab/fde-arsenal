# Nabeel Qureshi：把 FDE 这个职业讲透的第一人

## 他是谁

2015 年夏天入职 Palantir 伦敦办公室，此后辗转硅谷和华盛顿 DC，做了将近 8 年 FDE，2023 年离职创业（stealth 阶段，涉及政府业务）。他最出名的项目是 Airbus：搬到法国图卢兹住了一年多，每周 4 天泡在 A350 总装厂里，帮客户把产能爬坡速度提了约 4 倍。2024 年秋天他写下《Reflections on Palantir》，发表时正赶上 Palantir 进 S&P 500、市值逼近千亿美元——这篇文章现在是全网公认的理解 FDE 模式最好的一手材料。注意利益声明：他本人持有 PLTR 股票，文中有说明。

## 核心观点

1. **FDE 和 PD 是两拨人，速度和规模化分开负责。** FDE 每周 3-4 天驻客户现场，只为眼前这个客户端到端解决问题，不追求通用性；总部的 PD 工程师再从前线反复出现的方案里抽象出平台组件。Foundry 的早期组件（Magritte、Contour、Workshop）就是这么长出来的，到 2024 年这些产品化组件贡献了公司 50% 以上的收入。（《Reflections on Palantir》）

2. **"服务转产品"是可以验证的，看毛利率。** 2016 年说 Palantir 是咨询公司还算成立，2023 年它毛利率 80%（Accenture 是 32%），这是纯正的软件经济学，不是人力生意的账。（《Reflections on Palantir》）

3. **数据集成的难点一大半是组织政治，不是技术。** 企业里的数据"看门人"靠垄断访问权证明自己的存在价值，一个 8-12 周的试点项目光拿数据就可能耗光全部时间。Palantir 的解法是把安全做成敲门砖：集成层内建角色权限、行级策略、完整审计日志，数据进平台之后反而更安全，看门人放行的理由就有了。（《Reflections on Palantir》）

4. **驻场的迭代速度是创始人肌肉的来源。** 周一开会、周一晚上造、周二拿反馈、周二晚上改——一周能跑 4-5 个完整循环，六周后手里往往已经有一个两千万美元量级的东西。这解释了为什么每届 YC 里 ex-Palantir 创始人通常比 ex-Google 多，尽管 Google 员工数是 Palantir 的约 50 倍；他自己那届约 25 人的 cohort 出了 6 个独角兽级创始人。（Lenny's Podcast，2025）

5. **FDE 一半的工作是非技术的。** Palantir 给工程师发即兴戏剧教材《Impro》当入职必读，因为在客户组织里读房间、建信任、导航政治是硬技能。他对 FDE 的总结是"政治嗅觉 + 写代码速度的罕见组合"。（《Reflections on Palantir》）

## 对 FDE 从业者的用法

- **进场先解决数据政治，再谈技术方案。** 照他的经验，95% 的分析工作是拿数、清洗、拼接。用"接进来更安全、有审计"说服看门人，比讲技术架构管用。
- **把项目目标绑在客户业务指标上。** Airbus 项目的表述不是"升级数据设施"，是"帮我们把 A350 从每月 4 架爬到 8 架"。你的项目立项书也应该长这样。
- **有意识地把定制方案里可泛化的部分记下来。** FDE 和高级外包的分水岭，就在于你交付的东西有没有可能长成产品。

## 必读材料

- 《Reflections on Palantir》：https://nabeelqu.co/reflections-on-palantir/ （镜像：https://nabeelqu.substack.com/p/reflections-on-palantir）
- Lenny's Podcast《How Palantir built the ultimate founder factory》（约 97 分钟）：https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi
- 本库导读：[01-Nabeel-Palantir八年反思](../../01-原典/01-Nabeel-Palantir八年反思.md)、[02-Lenny对谈Nabeel-创始人工厂](../../01-原典/02-Lenny对谈Nabeel-创始人工厂.md)
