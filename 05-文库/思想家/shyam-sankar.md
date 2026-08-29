# Shyam Sankar：世界上第一个 FDE，也是这个模式的制度设计者

## 他是谁

2006 年以 13 号员工身份加入 Palantir，是公司历史上第一个"Forward Deployed Engineer"——这个岗位名就是他发明的。康奈尔电子与计算机工程本科、斯坦福管理科学硕士，早年常年驻扎在情报机构和军方客户现场，后来管全球部署业务，2023 年 1 月出任 Palantir CTO。Karp 说过没有他公司就不存在。2025 年他还被授衔美国陆军预备役中校（Executive Innovation Corps）。如果说 Nabeel 是 FDE 模式最好的记录者，Sankar 就是这个模式的发明人和制度作者。

## 核心观点

1. **"每个客户部署必须在 3 个月内用上公司内部工具"**。这是他定的硬规定，也是 Palantir 从服务公司转型成产品公司的关键机制。当年内部工具很难用、常崩、要 debug Spark，但强制前线用，倒逼了产品化的严谨——这个过程磨了三四年，最后磨出了 Foundry。没有这条规定，FDE 们会永远给每个客户从零手搓，公司就停在高端外包。（Nabeel Qureshi 在 Lenny's Podcast 的转述，2025）

2. **高绩效工程团队是文化的下游产物**。《The Primacy of Winning》的开篇立论：他从不直接"建设"高绩效团队，团队强不强取决于文化有没有内化"赢是第一位的"。他专门澄清这里的赢不是股价也不是 OKR，是"完成使命、交付成果、比所有人认为可能的走得更快更高更远"。（《The Primacy of Winning》，Pirate Wires）

3. **正确答案只能在现场挖到**。原话大意是"正确的答案、真正的缺口、值钱的想法，必须去田野里挖"（have to be mined in the field）。这是 FDE 模式的哲学根基：办公室里写不出真需求，必须把工程师放到客户的真实混乱里去。（《The Primacy of Winning》）

4. **每天问自己"我在赢吗"**。文章的收尾建议：持续自问 "Am I winning?"，如果答案是肯定的，其他一切（流程、头衔、汇报关系）都不重要。落在 FDE 语境里，"赢"的唯一定义是客户的业务指标动了没有。（《The Primacy of Winning》）

## 对 FDE 从业者的用法

- **给自己立"3 个月规则"**。不管你在什么公司，每个交付项目强制复用上一个项目沉淀的工具或模板，并且把这次的新东西再沉淀回去。这是从驻场外包走向产品化的唯一路径，而且不需要老板批准就能自己执行。
- **周报别写"做了什么"，写"赢了什么"**。按 Sankar 的标准重新定义你的进度汇报：客户的哪个指标动了、离合同里承诺的成果还差多少。写不出来就说明这周在空转。
- **警惕一切让你离开现场的安排**。有人想让你"远程支持""写方案就行"的时候，想想他的判断：值钱的答案只在田野里。离开现场的 FDE 贬值极快。

## 必读材料

- 《The Primacy of Winning》（Pirate Wires 刊发）：https://www.piratewires.com/p/primacy-of-winning-shyam-sankar-palantir
- 他的个人站与 Substack（含《The Defense Reformation》等后续文章）：https://www.shyamsankar.com/
- "3 个月内部工具规定"的出处（Lenny 对谈 Nabeel）：https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi
- 配套阅读：Adam Judelson《The unconventional Palantir principles》（Lenny's Newsletter，Palantir 组织设计的另一篇）
- 本库导读：[02-Lenny对谈Nabeel-创始人工厂](../../01-原典/02-Lenny对谈Nabeel-创始人工厂.md)
