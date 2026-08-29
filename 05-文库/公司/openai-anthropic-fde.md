# OpenAI 与 Anthropic：前沿实验室为什么自己下场做 FDE

> **一句话定位**：卖模型的公司发现模型不是瓶颈、部署才是，于是把工程师直接派进客户组织——OpenAI 叫 FDE，Anthropic 叫 Applied AI Engineer，干的是一回事。

## 模式拆解

### 为什么建队：AI 项目死在 demo 之后

最硬的数据来自 MIT 的 NANDA Initiative：研究 300 个公开 AI 项目，**95% 的企业 AI pilot 对损益表几乎没有可衡量的影响**。问题不在模型，在怎么用。调 API 做 demo 很容易出效果，但一旦要嵌进内部数据、遗留系统、合规要求和从没为 AI 设计过的工作流，就是另一回事。

更麻烦的是 AI 系统的失败形态：它是概率性的，测试环境表现很好，进了生产环境接触真实数据就可能悄悄劣化——不当场崩掉，而是输出慢慢不可靠，磨掉用户信任。

### "所有权真空"理论

这是理解这波 FDE 热最有用的一个概念。传统交付模式在 AI 项目上留下一个真空地带：**咨询顾问按交付物考核，交付即离场；企业内部团队按功能考核，不会长期盯着一个持续演化的系统。恰恰在 AI 系统最需要人盯着的上线后阶段，所有权消失了**。FDE 填的就是这个洞——按"系统上线后是否持续跑得好、持续产生价值"考核，一直陪跑到客户自己团队能接手。一句话总结：顾问卖交付物，FDE 对结果负责。

### OpenAI 怎么干

- 2024 年初建队时只有 **2 个人**，年中做到 39 人，当年计划扩到 52 人，负责人 Colin Jarvis
- 只挑价值千万到十亿美元量级的问题，客户包括 Morgan Stanley、T-Mobile、Klarna 等
- 打法是驻进客户团队：技术探索、建评估框架、上护栏、跟真实用户按月迭代。公开披露的成果包括 20-50% 的效率提升，Morgan Stanley 内部工具做到 98% 采用率
- 2025 年更进一步，干脆成立了专门的 **OpenAI Deployment Company**（部署公司），通过收购一次性带进约 150 名 FDE 和部署专家——把"部署"从一个团队升格成一门独立生意

### Anthropic 怎么干

不叫 FDE，叫 Applied AI 团队，持续扩编，职能相同：帮企业客户把 Claude 集成进生产系统。命名差异恰好说明这个岗位还没有行业标准——各家都在按自己的理解定义它。

## 关键数字

- 95%——企业 AI pilot 对损益表无可衡量影响的比例（MIT NANDA，300 个项目样本）
- 全行业 FDE 岗位招聘量 2025 年 1-9 月**增长 800% 以上**
- OpenAI FDE 团队一年内从 2 人到计划 52 人；Deployment Company 成立即有约 150 人
- Morgan Stanley 项目 98% 采用率；典型项目效率提升 20-50%

## 值得抄的

1. **用"所有权真空"讲清自己的定位**。这四个字比任何岗位描述都好用——你不是更便宜的顾问，也不是外包的程序员，你是上线后那段没人管的时间里对结果负责的人。
2. **只挑大问题**。OpenAI FDE 只接价值千万美元以上的问题，这保证了 FDE 的人力成本能打进账里。小问题用产品解决，大问题才配得上驻场。
3. **把评估框架当第一交付物**。OpenAI 打法里最先建的是 eval 和护栏，不是应用本身——AI 系统"悄悄劣化"的特性决定了没有度量就没有一切。

## 要警惕的

1. **800% 的招聘增长意味着头衔通胀**。大量公司会挂 FDE 名头招实施工程师、售前工程师。看一个 FDE 岗位是真是假，就看它按什么考核：按交付物考核的是顾问，按客户业务结果考核的才是 FDE。
2. **实验室下场做部署，对第三方服务商是双刃剑**。OpenAI 自己成立部署公司说明这块蛋糕大到它不愿只留给伙伴——跟着实验室做 FDE 生意的人，得想清楚自己在它不想亲自做的那部分市场里。

## 来源

- The New Stack, Why OpenAI and Anthropic are hiring forward deployed engineer teams: https://thenewstack.io/forward-deployed-engineers-ai/
- ZenML LLMOps Database 对 OpenAI FDE 实践的整理: https://www.zenml.io/llmops-database/forward-deployed-engineering-bringing-enterprise-llm-applications-to-production
- OpenAI Deployment Company 官宣: https://openai.com/index/openai-launches-the-deployment-company/
- BG2 访谈 Inside OpenAI Enterprise: https://www.youtube.com/watch?v=yLTSqBzKG2s
- MIT NANDA Initiative 报告（95% 数据出处，经 The New Stack 转引）
