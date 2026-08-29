# 附录 C　阅读地图

## 先说这份清单是怎么排的

这不是文献综述。文献综述要求覆盖，这份清单要求取舍。

下面这些材料我都读过，排序依据只有一条，对一个中国企业内部要打第一仗的人有多大用。不是按名气排，不是按发表时间排，也不是按引用次数排。同一份材料在别人的书单里可能排第一，在这里可能排第四组，甚至没进来。

有几份名气很大的东西没进这份清单，被排除的理由写在最后一节。排除理由和推荐理由一样重要，因为它告诉你这份清单是按什么标准筛的。

读法建议：第一组三篇是必读，读完你就有了世界观，其余三组按你现在卡在哪一站挑着读。四组加起来大概二十几份，全读完要一个月，但真正非读不可的只有第一组的三篇，加上第三组里对着你当前那一站的两三份。

本库对每一份海外材料都写了中文导读，不是翻译，是拆解加我的批注。导读链接跟在每条后面。

---

## 第一组　先读这三篇，建立世界观

### 1. Nabeel Qureshi《Reflections on Palantir》

作者 Nabeel S. Qureshi，Palantir 做了近八年 FDE，后离职创业。<https://nabeelqu.co/reflections-on-palantir/>

为什么是它：目前关于 FDE 模式最扎实的一手材料，没有之一。一个干了八年的内部人，把这家公司从被骂成间谍外包，到千亿美元软件平台的完整逻辑讲透了。它同时是回忆录、组织分析和方法论，而且作者自己披露了持股，立场摆在明处。

该带走什么：三件事。一个客户很多能力，这是 FDE 区别于普通实施工程师的公式；数据集成的难点一大半是组织政治，不是技术；服务能长成产品，但要靠一条反人性的制度把每个人的局部最优压住。这三条是全书的地基。

本库导读：[01-原典/01](../01-原典/01-Nabeel-Palantir八年反思.md)　人物档案：[nabeel-qureshi.md](../05-文库/思想家/nabeel-qureshi.md)

### 2. Barry McCardel《Understanding Forward Deployed Engineering》

作者 Barry McCardel，Hex 联合创始人兼 CEO，前 Palantir。<https://www.barry.ooo/posts/fde-culture>

为什么是它：读完第一篇你会很兴奋，这一篇治那个兴奋。他的判断是绝大多数公司学 FDE 都在学皮毛，因为他们付不起也不愿付这个模式的真实代价。这篇必须紧跟着第一篇读，中间不要隔天。

该带走什么：一句清醒剂，没有对前线的极端授权，你招来的只是贵价外包。这句话在本书第 4 章被用来支撑整整一站，因为在中国企业内部，授权这件事比在软件公司更难拿到，也更容易被当成走过场。

本库导读：[01-原典/03](../01-原典/03-Barry-理解FDE文化.md)　人物档案：[barry-mccardel.md](../05-文库/思想家/barry-mccardel.md)

### 3. Palantir《Deploying Full Spectrum AI in Days: How AIP Bootcamps Work》

Palantir 官方博客，2023 年 10 月。<https://blog.palantir.com/deploying-full-spectrum-ai-in-days-how-aip-bootcamps-work-21829ec8d560>

为什么是它：前两篇讲的是这个职业是什么、代价是什么，这一篇讲今天怎么开工。它是一份可以照抄的开工纪律，而且它的三条硬约束我在本书里全盘继承了。我选它没选那些讲 AI 时代 FDE 为什么变热的行业文章，理由是热度不需要论证，纪律需要。

该带走什么：客户自带真实业务数据和真实业务问题；客户自己上手敲键盘，不是看演示；到场名单三方缺一不可，业务负责人、最终用户、IT 干系人。这三条变成了本书的客户准备协议。

本库导读：[01-原典/09](../01-原典/09-Palantir-AIP-Bootcamp如何运作.md)　方法拆解：[AIP Bootcamp 模式](../02-方法论/aip-bootcamp-模式.md)

---

## 第二组　角色与组织怎么设计

这一组是给负责人和想搭团队的人读的。如果你只是要自己打一仗，可以跳到第三组。

《Dev versus Delta: Demystifying Engineering Roles at Palantir》　Palantir 官方博客，2019 年，作者 Bruno Pontes Soares Rocha 博士，公司的工程招聘负责人。Palantir 官方对自家工程组织结构最系统的一次自我解剖，Dev 造平台、Delta 用平台打仗，两边靠代码回流和人才轮换连成闭环。任何想复制这套模式的公司都绕不开这套双引擎设计。导读：[01-原典/08](../01-原典/08-Palantir-Dev与Delta角色分工.md)

《A Day in the Life of a Palantir Forward Deployed Software Engineer》　Palantir 官方博客，2020 年。<https://blog.palantir.com/a-day-in-the-life-of-a-palantir-forward-deployed-software-engineer-45ef2de257b1>　「一个能力很多客户」对「一个客户很多能力」这条公式出自这里，它是判断一个岗位到底是不是 FDE 的最快检验。导读：[01-原典/06](../01-原典/06-Palantir-FDSE的一天.md)

**Palantir 官方博客**　《A Day in the Life of a Palantir Deployment Strategist》，2022 年，作者 Sabine。<https://blog.palantir.com/a-day-in-the-life-of-a-palantir-deployment-strategist-951cb59a5a96>　最大的价值是三份精确到小时的日程表。上午 10 点 15 做数据管道，下午 1 点 30 进客户迭代会展示上午刚做的东西，这个节拍是本书第 6 站节奏的来源。同一份材料里还有一个数，标准试点周期 4 到 12 周。导读：[01-原典/07](../01-原典/07-Palantir-DeploymentStrategist的一天.md)

**Lenny's Podcast 对谈 Nabeel Qureshi**　《How Palantir built the ultimate founder factory》，2025 年。<https://www.lennysnewsletter.com/p/inside-palantir-nabeel-qureshi>　博客文章讲清了模式是什么，这期播客讲清了模式为什么量产创始人。招聘、无头衔制、驻场节奏、PM 晋升路径，整条人才流水线被拆开摆在桌面上。本书第 12 章大半的材料来自这里。导读：[01-原典/02](../01-原典/02-Lenny对谈Nabeel-创始人工厂.md)

**Shyam Sankar**　《The Primacy of Winning》。他是 Palantir 13 号员工，世界上第一个 FDE。<https://www.piratewires.com/p/primacy-of-winning-shyam-sankar-palantir>　那条「部署三个月内必须改用内部工具」的规定是他的。这条规定反人性，因为对每个具体的 FDE 来说用自己手写的东西永远更快，但没有它 Palantir 就是一家毛利 30% 的高端咨询公司。人物档案：[shyam-sankar.md](../05-文库/思想家/shyam-sankar.md)

**Distyl AI 深度报道，Yespress**　<https://yespress.io/distyl>　两个前 Palantir 人把 FDE 本身做成了商业模式。它是 Barry 那篇泼冷水之后唯一的活案例，三层结构里的诊断、驻场、平台，对应本书第 3 站、第 4 到 7 站、第 8 站的复制。读它的时候注意公司自述口径。导读：[01-原典/05](../01-原典/05-Distyl-FDE即服务独角兽.md)　公司档案：[distyl.md](../05-文库/公司/distyl.md)

**Supervity FDE Trainee Program**　<https://www.supervity.ai/fde-trainee-program>　12 周训练营，看它的选拔漏斗设计，作品集到情景测试到面试加 micro-demo 到入营，以及津贴制加输送出口的模式。它不解决你打仗的问题，解决的是你以后要批量带人的问题。公司档案：[supervity.md](../05-文库/公司/supervity.md)

---

## 第三组　方法与工艺

这一组按站排。你卡在哪一站，读对应的那两三份，别一次读完。

**第 3 站　选题**

- Amazon Working Backwards 的 PR/FAQ 方法。<https://workingbackwards.com/concepts/working-backwards-pr-faq-process/>　五个客户问题里最有用的是第四问，你怎么知道客户需要它。本库改法见 [场景海选与伪需求过滤器](../03-模板库/场景海选与伪需求过滤器.md)。
- Douglas Hubbard《How to Measure Anything》。澄清链那一节值回书价，任何说不出支持哪个具体决策的测量都没有价值。本库用法见 [ROI 测算表](../03-模板库/roi测算表.md)。
- 毕昇（DataElem 数据项素）《跟上百家企业聊完大模型应用：应用场景、困难、解法》。<https://www.53ai.com/news/Bisheng/2024052849352.html>　中文世界里少见的、主动写失败的一手落地材料。先拿 200 到 300 个场景做尝试再收敛这条建议出自这里。给这条建议的是一家本来想卖你咨询服务、收你定制化部署费用的公司，它劝你先自己广撒网，所以这个建议格外可信。

**第 4 站　真问题与 Context**

- Rob Fitzpatrick《The Mom Test》。<https://www.momtestbook.com/>　三条规则，谈他们的生活不谈你的点子、问过去的具体事不问未来的意见、少说多听。底层论断是人会出于礼貌撒谎，这一条在中文语境里的权重比原书假设的还要高。方法拆解：[Mom Test 访谈法](../02-方法论/mom-test-访谈法.md)　人物档案：[rob-fitzpatrick.md](../05-文库/思想家/rob-fitzpatrick.md)
- Beyer & Holtzblatt《Contextual Design》。师徒模型那一节，让受访者边做边讲，不要隔着会议桌问。本库把它压成了一句可执行的开场，上周这个活你是怎么干的，走给我看一遍。
- Neil Lawrence《Data Readiness Levels》。<https://arxiv.org/abs/1705.02245>　三个 Band 的真正用途不是评估数据，是给甲乙双方一套共同语言去谈数据到底准备好了没有。用法见 [客户准备协议](../03-模板库/客户准备协议.md)。

**第 5 站　Eval**

- Louis Dorard 的 Machine Learning Canvas。<https://www.ownml.co/machine-learning-canvas>　CC BY-SA 4.0，可以合法改编再发布。它问的四件事至今没有过时，预测什么、喂给哪个决策、需要什么数据、错了的代价是什么。最后一问是全书第 7 章的骨头。改编版见 [Eval 设计卡](../03-模板库/eval设计卡.md)。
- Agrawal / Gans / Goldfarb《A Simple Tool to Start Making Decisions with the Help of AI》，HBR 2018。<https://hbr.org/2018/04/a-simple-tool-to-start-making-decisions-with-the-help-of-ai>　把任务显式切成 AI 负责预测、人负责判断，这是「问题弄清楚了剩下的 AI 都能搞定」这句话的学术底座。改编版见 [任务拆解卡](../03-模板库/任务拆解卡.md)。

**第 6 站　造与测**

- Alistair Cockburn《Start with a Walking Skeleton》，收于《97 Things Every Software Architect Should Know》第 60 篇。<https://www.oreilly.com/library/view/97-things-every/9780596800611/ch60.html>　一页纸，五分钟读完，二十年不过时。
- Ryan Singer《Shape Up》，全书免费。<https://basecamp.com/shapeup>　Appetite、Circuit Breaker、Scope Hammering 三件套。先定愿意花多少时间，再把方案锤进这个时间。方法拆解：[MVD 最小可行部署](../02-方法论/mvd-最小可行部署.md)

**第 7 站　上线与采纳**

- Google PAIR《People + AI Guidebook》。<https://pair.withgoogle.com/guidebook/>　六章加 23 个设计模式。对中国工业现场最有用的是 Errors + Graceful Failure 那一章，AI 答错一次，老师傅就再也不用了。
- Everett Rogers《Diffusion of Innovations》。意见领袖那一节。采纳的起飞点来自同侪影响，不来自自上而下的宣讲。本库落法见 [采纳设计检查表](../03-模板库/采纳设计检查表.md)。

第 8 站与复制

- John Shook《Managing to Learn》，Lean Enterprise Institute，2008。A3 首先不是文档格式，是一套带教制度，上级不给答案，只对下级的草稿一轮轮提问。这几乎是「你的下一个 FDE，正坐在你公司办公室里面某一个工位上」这个判断最好的历史先例：一家制造业公司用一张纸加一套提问制度，在内部批量生产出了会解决问题的人。
- Lawrence Weed 的问题导向病历与 SOAP。<https://www.amjmed.com/article/S0002-9343(19)30352-3/fulltext>　病历的意义在于让判断第一次可被同行审计。本库落法见 [交付病历](../03-模板库/交付病历.md)。

**通读类两本**

- Marty Cagan《Inspired》。产品发现和交付的区别，FDE 驻场干的活理论底座是他写的。人物档案：[marty-cagan.md](../05-文库/思想家/marty-cagan.md)
- 范冰《FDE4.AI》开源手册，20 万字，免费。<https://fde4.ai>　目前中文最系统的一本，按交付生命周期组织八章。它和本书的分工是清楚的，他写这个职业本身怎么做，我写中国企业怎么从内部长出这批人。附录里那句「口径不清的 86%，不如口径清楚的 51%」，我认为是他全书水平最高的一句，本书引了两次。

---

## 第四组　泼冷水与反面

这一组的价值高于第二、三组，因为大多数人的书单里没有它。

**智盛汇**　《六刀剑指「主流」FDE 定义》，微信公众号内按标题检索。痛批 IT 出身的人进设备检修现场瞎梳理业务，在有安全规程的专业领域可能出安全事故。这篇是本书第 6 章专业边界那一节的来源，它提醒的事情是对的，Palantir 的 Delta 配的是行业出身的 Echo，国内单兵作战的 FDE 没有这层保险。本库对应案例：[败 · 专业边界事故](../04-案例库/败-专业边界事故.md)

**MIT NANDA**　《The GenAI Divide: State of AI in Business 2025》。<https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf>　95% 那个数字的出处。读它的正确方式是先读方法论那一节再读结论，因为方法论里写清了它只认三项指标——利润、成本、收入。知道了这三项，你才知道那个 95% 说的是什么：绝大多数企业级生成式 AI 项目，在这三项上什么都没动。本库对应案例：[败 · POC 陷阱](../04-案例库/败-poc陷阱.md)

**RAND**　《The Root Causes of Failure for Artificial Intelligence Projects and How They Can Succeed》，2024 年。高管发起人的流失和淡出作为失败根因反复出现。这份材料支撑的是本书第 9 章那个最容易被忽略的问题，项目怎么活过冠军离职。本库对应案例：[败 · 冠军离职](../04-案例库/败-冠军离职.md)

**需求侧的幻灭三篇**　《你招的不是 FDE，是月薪十万的外包》《月薪 5 万、常年出差、样样都干：中国 FDE 工程师的"黄金牢笼"》《别把 FDE 做成了驻场外包》，均为微信公众号文章，按标题检索。它们的共同点是从被雇的那一侧写，而绝大多数 FDE 材料是从雇人的那一侧写的。想清楚你要不要当这个人，这三篇比任何职业规划文章都有用。国内玩家扫描：[china-players.md](../05-文库/公司/china-players.md)

**澜码科技的结局**　界面新闻、腾讯新闻等公开报道。国内把外部 FDE 这件事想得最清楚的公司之一，方法论是对的，结局是艰难的。读它的正确方式是分清它能作证什么、不能作证什么，一家公司的结局定不了一个模式的生死。本库案例：[败 · 澜码，外部交付的结构性困境](../04-案例库/败-澜码-外部交付的结构性困境.md)

**Bloomberg Línea 关于 Kavak 的前员工批评报道**　<https://www.bloomberglinea.com/english/former-employees-lambast-kavak-for-customer-service-failures-bad-management/>　单向视角，但必须读。本书第 11 章用 Kavak 讲开疆拓土，同一个故事的另一半是估值跌 75%、关掉两个国家、管理层重组。只讲前一半的案例都是宣传稿。本库案例：[胜 · Kavak，开疆拓土](../04-案例库/胜-Kavak-开疆拓土.md)

---

## 我没放进来的，和为什么

**Riste Gramatikov**　《Forward Deployed: Inside the Palantir Framework》，2026 年。目前唯一把 FDE 当成一个体系写成整本书的。它没进第一组，是因为第一组那三篇全部出自亲历者之手，而这本是外部视角的体系化整理。体系化整理的价值在读完一手材料之后才显现出来，所以它适合当框架补充，不适合当入门。

**Alex Karp**　《The Technological Republic》。书本身值得读，但它讲的是技术与国家、硅谷的价值取向，和一个要在自己公司里推动 AI 落地的人隔得太远。想了解 Karp 对招人和文化的判断，读 Nabeel 那篇里的相关段落更省时间。人物档案仍收在库里：[alex-karp.md](../05-文库/思想家/alex-karp.md)

**roadmap.sh 的 FDE 学习路线**　<https://roadmap.sh/forward-deployed-engineer>　免费的技能树，画得也不错。没放进来是因为它是一张技术栈清单，而这本书的判断是技术栈从来不是瓶颈。给一个企业内部的业务骨干看这张图，他得到的信息是「这行我干不了」，这个结论是错的。

**ADaSci CFDE 之类的认证，以及国内两天速成的 FDE 班**　不推荐。三十小时自学换一张证，解决的是简历问题，不是能力问题——而这个岗位的门槛全部在能力那一侧。本库做过一份[认证模式对比](../02-方法论/认证模式对比.md)，几家的课时、内容和出口摆在一起看得更清楚。

**Maven 的 Forward Deployed Engineering Bootcamp**　11 周、2000 美元、口碑很好，四个真实 AI 产品从零到部署的项目制结构，大纲设计确实值得抄。没放进来的原因很实际，它的场景是美国的、外部乙方的、英文的，而这本书的读者要打的是自己公司里的仗。想抄它的教学结构可以去看，想学怎么打仗别去。

**BG2 那期 OpenAI 企业业务访谈的视频**　信息量不小，但它更接近行业动态而不是方法。这类材料放在 [07-情报站](../07-情报站/README.md) 更合适，那里按周更新。

---

一句收尾。上面这些材料里没有一份是写给中国企业内部第一次做 AI 落地的人的，包括第四组那些中文的。你读它们的方式应该是拆零件，不是照搬整机。哪些零件我拆下来用了、怎么改的、为什么改，全部写在 [附录 B](附录B-模板索引.md) 和 [模板权威溯源](../03-模板库/模板权威溯源.md) 里。

全书案例与数字的证据档位见 [附录 D](附录D-来源与出处.md)。现在就要开工的，评估集结构、两个 judge 提示词和四段 agent 指令都在 [附录 E](附录E-可直接抄的提示词与表结构.md)，可以直接抄。

*返回：[书稿大纲](大纲.md)*
