# Bionic Design Assistant

> 在浏览器本地运行的仿生产品设计规则组合工具

[在线体验](https://bionic-design-assistant.vercel.app/) · [GitHub 仓库](https://github.com/sayohno222-blip/bionic-design-assistant)

线上版本由 Vercel 托管，生产分支为 `main`。

## 项目定位

Bionic Design Assistant 面向产品设计学生和初学者，帮助用户把自然灵感整理成可以继续画草图、做结构和验证人机的产品设计方向。用户输入产品类型、灵感来源、风格、目标用户和设计目标后，浏览器中的规则引擎会组合形态、结构、功能、CMF、绘图提示词和设计说明。

## 当前状态

- 当前使用本地规则引擎，不调用 DeepSeek、OpenAI 或其他第三方 AI API。
- 用户输入只在当前浏览器中处理，不上传、保存或建立用户档案。
- 内置云朵、竹、贝壳、蜂巢、荷叶、章鱼、叶片和松果等自然特征库。
- 内置支撑、容器、照明、家具、收纳、穿戴等产品约束。
- 产品类型、灵感、风格、目标用户和设计目标都会影响最终结果。
- 未收录的灵感会进入通用观察框架，不再默认返回云朵手机支架。

## 核心功能

| 模块 | 当前实现 |
|---|---|
| 设计输入 | 产品类型、自然灵感、风格、目标用户、设计目标 |
| 灵感分析 | 匹配或构建自然对象的形态、结构与适应策略 |
| 特征提取 | 将自然特征与产品功能、结构约束结合 |
| 方案发散 | 从形态、结构和使用体验生成 3 个方向 |
| CMF 建议 | 根据灵感、产品类型和风格组合色彩、材料与工艺 |
| 绘图提示词 | 输出 Midjourney、DALL-E、Stable Diffusion 提示词 |
| 设计说明 | 自动整理包含目标用户和设计目标的说明文案 |
| 响应式界面 | 支持桌面端和移动端浏览 |

## 技术栈

| 模块 | 技术 |
|---|---|
| 前端 | React 19、TypeScript 5 |
| 构建 | Vite 6 |
| 样式 | Tailwind CSS 4 |
| 状态管理 | useReducer + 状态机式流程 |
| 生成逻辑 | 数据驱动的确定性规则组合 |
| 部署 | GitHub + Vercel |

## 项目结构

```text
bionic-design-assistant/
├── client/
│   ├── src/
│   │   ├── components/bionic/       # 输入表单与结果展示
│   │   ├── components/layout/       # 页面布局与状态路由
│   │   ├── hooks/useBionicDesign.ts # 生成流程状态管理
│   │   ├── services/
│   │   │   └── bionicRuleEngine.ts  # 特征库、产品库与组合规则
│   │   └── types/                   # TypeScript 类型
│   ├── index.html
│   └── package.json
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

## 使用边界

规则引擎能够让输入影响结果，但它不是大语言模型，也不会理解所有专业术语。输出用于前期发散和设计推理，不能替代结构计算、材料测试、人体工学验证、真实用户研究或制造评估。

绘图提示词是辅助材料，不代表对应图片平台一定能生成可制造的产品。

## 我的工作

- 确定目标用户、输入字段和结果模块。
- 建立自然灵感、产品约束和风格规则的组合逻辑。
- 规划从自然观察到设计方向、CMF和设计说明的页面流程。
- 调整界面布局、视觉细节和移动端体验。
- 通过 GitHub 与 Vercel 完成自动构建和生产部署。
- 项目使用 AI 辅助开发；需求定义、规则取舍、布局判断和最终验证由我完成。

## 使用说明

本项目用于学习、作品集展示和设计前期发散。使用者需要结合真实尺寸、结构、人机与制造条件继续判断，不能直接把规则组合结果当成最终设计方案。
