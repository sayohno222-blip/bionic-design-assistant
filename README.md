# AI Design Assistant

> 仿生产品设计助手｜前端交互演示

[在线体验](https://bionic-design-assistant.vercel.app/) · [GitHub 仓库](https://github.com/sayohno222-blip/bionic-design-assistant)

线上版本由 Vercel 托管，生产分支为 `main`。

## 项目定位

AI Design Assistant 面向产品设计学生和初学者，帮助用户把自然灵感整理成可继续深化的产品设计方向。用户填写产品类型、灵感来源、风格、目标用户和设计目标后，系统会展示从特征提取到设计说明的完整流程。

## 当前状态

- 当前为前端 Mock 演示，没有接入真实 AI API。
- 内置云朵手机支架、竹元素水杯、贝壳台灯 3 组示例数据。
- 系统根据输入关键词匹配示例；无法匹配时默认返回云朵手机支架方案。
- 输出内容适合用于前期发散和流程展示，不能替代结构验证、材料测试或真实用户研究。

## 核心功能

| 模块 | 当前实现 |
|---|---|
| 设计输入 | 产品类型、自然灵感、风格关键词、目标用户、设计目标 |
| 灵感分析 | 梳理自然对象的形态、结构与意象特征 |
| 特征提取 | 分别展示形态、结构和功能转译方向 |
| 方案发散 | 生成 3 个产品设计方向 |
| CMF 建议 | 提供色彩、材料与表面处理参考 |
| 绘图提示词 | 输出 Midjourney、DALL-E、Stable Diffusion 示例提示词 |
| 设计说明 | 生成可复制的设计说明文案 |
| 响应式界面 | 支持桌面端和移动端浏览 |

## 技术栈

| 模块 | 技术 |
|---|---|
| 前端 | React 19、TypeScript 5 |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 4 |
| 状态管理 | useReducer + 状态机式流程 |
| 部署 | GitHub + Vercel |

## 项目结构

```text
bionic-design-assistant/
├── client/
│   ├── src/
│   │   ├── components/bionic/   # 输入表单与结果展示
│   │   ├── components/layout/   # 页面布局与状态路由
│   │   ├── hooks/               # 仿生设计流程状态管理
│   │   ├── services/            # Mock 数据与匹配逻辑
│   │   └── types/               # TypeScript 类型
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── package.json
└── vercel.json
```

## 本地运行

```bash
git clone https://github.com/sayohno222-blip/bionic-design-assistant.git
cd bionic-design-assistant/client
npm ci
npm run dev
```

生产构建：

```bash
cd client
npm run build
```

## 我的工作

- 确定目标用户、输入字段和结果模块。
- 规划从自然灵感到设计方案的页面流程与信息层级。
- 调整界面布局、视觉细节和移动端体验。
- 组织示例数据，完成前端交互和部署准备。
- 项目使用 AI 辅助开发；需求定义、布局判断、功能取舍和最终视觉调整由我完成。

## 后续方向

- [ ] 接入真实 AI API，并增加输出结构校验
- [ ] 增加更多仿生案例和自定义结果能力
- [ ] 增加方案保存与导出
- [ ] 结合草图、结构和 CMF 可行性继续验证

## 使用说明

本项目用于学习、作品集展示和产品流程验证。生成内容仅供设计前期参考。
