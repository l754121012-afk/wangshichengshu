# AI回忆录生成器 — 微信小程序产品计划

> 通过AI访谈式对话，自动为老人生成回忆录并支持打印实体书。

## 项目结构

```
memoir-generator-plan/
├── memoir-generator-plan.html   # 完整产品设计计划书（十大章节）
├── prototype.html               # 高保真H5手机原型（5个可交互页面）
├── ui-gallery.html              # UI视觉图库页面
├── assets/                      # AI生成的UI视觉展示图
│   ├── ui_all_screens_v2.jpg   # 全部页面总览
│   ├── ui_screen_gift.jpg      # 子女送礼页
│   ├── ui_screen_home.jpg      # 老人首页
│   ├── ui_screen_chat.jpg      # AI聊天页
│   ├── ui_screen_memoir.jpg    # 回忆录书稿页
│   ├── ui_screen_pay.jpg       # 升级付费页
│   ├── ui_flow_parent_initiate.jpg  # 子女发起流程图
│   ├── ui_flow_elderly_chat.jpg     # 老人聊天流程图
│   ├── ui_flow_memoir_book.jpg     # 回忆录成书流程图
│   ├── ui_monetization_funnel.jpg  # 盈利循环漏斗图
│   └── ui_showcase_all_screens.jpg # 产品架构总览
├── _shared/
│   ├── fonts/                  # 字体文件（CrimsonPro, WorkSans）
│   └── js/                     # 共享JS库（ECharts, Mermaid）
```

## 核心功能
- AI访谈式对话引导老人讲述人生故事
- 自动整理润色成章节化回忆录
- 支持添加老照片
- 可导出PDF或下单打印精装实体书

## 定价
- 电子版：29.9元/本
- 精装实体书：199元起
- 月度会员：9.9元/月

## 技术栈
- 前端：微信小程序（uni-app/原生）
- 后端：微信云开发（CloudBase）
- 大模型：DeepSeek-V3 API
- 语音：讯飞识别 + Edge TTS合成
- 支付：微信支付
