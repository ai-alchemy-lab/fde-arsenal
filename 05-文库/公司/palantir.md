# Palantir：FDE 模式的发源地

> **一句话定位**：FDE 这个职业的原产地。Palantir 用二十年时间证明了一件事——把顶级工程师派到客户现场解决具体问题，不仅能收到大钱，还能反向长出一个 80% 毛利的软件平台。

## 模式拆解

### 怎么交付：Echo + Delta 配对驻场

Palantir 前线的最小作战单元是两个人：**FDSE**（内部代号 Delta）负责真刀真枪写代码搭方案，**Deployment Strategist**（内部代号 Echo）负责搞定客户组织里的人、把业务问题翻译成技术问题、盯住价值。对外头衔都叫 FDE，内部分工明确又经常互相渗透。

驻场节奏很硬：**周一到周四住在客户那儿**，在客户办公室有自己的工位，周五回公司。迭代速度是这个模式的命根子——周一开会、周一晚上造、周二拿反馈、周二改，**一周能跑 4-5 个完整迭代循环**。对比一下传统软件公司一个需求排期排三个月，就明白客户为什么愿意付钱。

一个细节能说明投入程度：直到 2016 年，Palantir 派驻客户现场的 Delta 数量比总部造产品的工程师还多。经典案例是 Airbus——Nabeel Qureshi 搬到法国图卢兹住了一年多，每周 4 天泡在总装厂，把 SAP 里"S3F1_Z"这种外星表名映射成"飞机、工单、零件"这些人话（这就是后来 ontology 的雏形），帮 A350 产能爬坡约 4 倍。

### 怎么长出产品：前线回流机制

FDE 不追求通用性，只为眼前这个客户端到端解决问题；总部的 PD 工程师再从各地前线反复造的轮子里抽象出通用组件。Foundry 平台就是这么从苏黎世、休斯顿、图卢兹一堆客户现场"长"出来的，到 2024 年这些产品化组件贡献公司 50% 以上收入。2023 年毛利率 80%（对比 Accenture 约 32%）——这是"服务转产品"真正跑通的账面证据。

### 怎么获客：AIP Bootcamp

2023 年中推出的 AIP Bootcamp 把销售动作改造成了交付动作：不发 PPT、不谈 POC，客户提前 1-2 周交一份真实数据切片，业务负责人、最终用户、IT 三方到场，FDE 当着客户的面**一到五天做出一个能用的真实用例**。"买不买"直接变成"都做出来了，续不续"。

### 怎么收钱：按成果价值定价

单子是数百万美元级，定价锚定的不是软件授权费，而是问题本身的价值——如果解决产能问题对客户值 1 亿美元，就按这个量级谈。FDE 的人力成本直接打进合同里。

## 关键数字

- 2024 年 Q1 办了约 **660 场 Bootcamp**，同季签下 **87 个百万美元以上订单**，客户数同比增长约 42%（财报电话会转述，口径以财报为准）
- 2023 年毛利率 **80%+**；产品化组件贡献 50%+ 收入
- 驻场节奏：每周 4 天在客户现场，一周 4-5 个迭代循环
- 人才外溢：每届 YC 里 ex-Palantir 创始人通常比 ex-Google 多，而 Google 员工数是 Palantir 的约 50 倍

## 值得抄的

1. **双角色配对**。一个管"造出来"（Delta），一个管"用起来、算得清价值、组织里推得动"（Echo）。国内企业服务市场组织政治只会更重，Delta 好找，Echo 更稀缺。
2. **Bootcamp 获客**。几天做出真东西比几个月做 PPT 有说服力得多——但前提是有平台底座托住，让时间全花在价值层而不是攒基建。
3. **前线回流协议**。前线可以直接给核心产品写代码，但必须先对齐路线图、开发中持续 review。没有这条管道，FDE 就只是高级外包。

## 要警惕的

1. **这套账普通公司烧不起**。Palantir 把客户部署当 R&D 投资而不是销售成本，很多 pilot 免费做、毛利负无穷，赌个别项目长出改变命运的产品。Hex CEO Barry McCardel（前 Palantir）的原话很扎心：大多数所谓 FDE 团队只是"气泡水版售前工程"。
2. **对人的消耗是真的**。常年驻场、高强度、"burnt-out husks of FDEs"（被烧成空壳的 FDE）不是玩笑。学这个模式之前先想清楚补偿机制。

## 来源

- Nabeel Qureshi, Reflections on Palantir: https://nabeelqu.co/reflections-on-palantir/
- Lenny's Podcast 对谈 Nabeel: https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi
- Palantir 官方博客三篇（FDSE 的一天 / Deployment Strategist 的一天 / Dev versus Delta）: https://blog.palantir.com
- AIP Bootcamp 官方说明: https://blog.palantir.com/deploying-full-spectrum-ai-in-days-how-aip-bootcamps-work-21829ec8d560
- Barry McCardel, Understanding Forward Deployed Engineering: https://www.barry.ooo/posts/fde-culture
