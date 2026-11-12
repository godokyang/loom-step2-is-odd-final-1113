---
loom_kind: requirement
id: 7e2b1c4a-3f8d-4e6a-9c15-b0a82d5f7e21
title: 新增 isOddInteger 安全判断导出
work_items:
  - id: wi-impl
    title: 实现 isOddInteger 导出并补 mocha 测试
    deliverable: index.js（新增 module.exports.isOddInteger）与 test.js 中 isOddInteger 测试
    completion: node 中 require('./') 同时拿到 isOdd 与 isOddInteger；规则用例全部符合；npm test 全部通过
    effort: 0.6
    depends_on: []
    status: done
    self_check: npm test 10 passing（原 isOdd 3 项 + isOddInteger 7 项）；node 实测：奇数 true、偶数与 -0 false、2**60+1 / 1.5 / NaN / Infinity / '1' / null / undefined 均 false 且不抛错；默认导出仍为 isOdd 函数。已改 index.js、test.js、README.md。git commit 因 .git 位于需求工作区外被沙盒拒绝（index.lock Operation not permitted），变更保留在工作区待提交。
  - id: wi-readme
    title: README 增补 isOddInteger 用法说明
    deliverable: README.md 增补 isOddInteger 用法与 isOdd 区别说明
    completion: README 包含 isOddInteger 示例代码及两种导出的行为差异说明
    effort: 0.4
    depends_on: []
---
# 新增 isOddInteger 安全判断导出

## 目标
在 is-odd 库中新增命名导出 `isOddInteger(value)`：只对整数类型的 `number` 返回奇偶判断（奇数返回 `true`，偶数返回 `false`）；其他任何输入不抛错，统一返回 `false`。

## 行为约定
- 输入为安全整数范围内的整数 `number`（含负整数）：按奇偶返回 `true`/`false`；负奇数返回 `true`，`-0` 为偶数返回 `false`。
- 超出 Number.MAX_SAFE_INTEGER 范围的大整数：视为不可靠输入，返回 `false`，不抛错。
- 非整数 number、NaN、Infinity、字符串、null、undefined 等其他输入：返回 `false`，不抛异常。
- 现有默认导出 `isOdd` 的行为完全不变（仍按原逻辑抛错或返回）。

## 完成条件
- `isOddInteger` 通过 `module.exports.isOddInteger` 可用，默认导出仍指向原 `isOdd`。
- mocha 测试覆盖：正/负奇偶整数、字符串数字、小数、NaN、Infinity、null/undefined；并保留原有 `isOdd` 测试全部通过。
- README 增补 `isOddInteger` 用法示例及与 `isOdd` 的区别说明。

## 工作事实
- 当前阶段：需求共创（收口）
- 已完成：目标、行为约定（含安全整数边界规则）与完成条件均已确认
- 阻碍：无
- 剩余工作：等待用户确认总结后分派实现
- 事实来源：用户对话答复；仓库 index.js / test.js / package.json 现状
