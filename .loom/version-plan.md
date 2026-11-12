---
shared_work:
  - id: req-planning
    title: isOddInteger 需求共创与规划
    deliverable: docs/requirements/is-odd-integer.md 与 .loom/version-plan.md
    completion: 需求文档含 loom_kind/id/title/行为约定/完成条件，版本计划落盘
    effort: 1
    kind: planning
    depends_on: []
    status: done
    self_check: '需求文档 docs/requirements/is-odd-integer.md 含有效 YAML 头（loom_kind: requirement、固定 id、title、行为约定、完成条件）；.loom/version-plan.md 覆盖 1 项需求（effort 1）与 2 项 shared_work（planning、validation）；用户已确认完整需求总结（digest 38628d73…）。'
  - id: version-verify
    title: 版本独立验收
    deliverable: 独立验收结论与证据
    completion: 当前版本提交经独立验收无未解决缺口
    effort: 1
    kind: validation
    depends_on:
      - req-planning
requirements:
  - requirement_id: 7e2b1c4a-3f8d-4e6a-9c15-b0a82d5f7e21
    scope: 新增命名导出 isOddInteger：安全整数内整数按奇偶返回 true/false（负奇数 true、-0 false），超出安全整数、非整数、NaN、Infinity 及非 number 输入一律返回 false 且不抛错；现有默认导出 isOdd 行为保持不变；补充测试与 README 用法说明。
    effort: 1
    expected_seconds: 900
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
