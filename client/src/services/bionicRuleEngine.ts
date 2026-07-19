import type {
  BionicDesignResult,
  BionicInput,
  ColorSuggestion,
  FinishSuggestion,
  MaterialSuggestion,
} from '../types/bionic';

interface InspirationProfile {
  name: string;
  englishName: string;
  keywords: string[];
  form: string[];
  structure: string[];
  strategies: string[];
  colors: ColorSuggestion[];
}

interface ProductProfile {
  name: string;
  englishName: string;
  keywords: string[];
  functions: string[];
  constraints: string[];
  materials: MaterialSuggestion[];
}

interface StyleProfile {
  name: string;
  englishName: string;
  keywords: string[];
  formGuidance: string;
  finishes: FinishSuggestion[];
}

const INSPIRATION_PROFILES: InspirationProfile[] = [
  {
    name: '云朵',
    englishName: 'cloud',
    keywords: ['云', '云朵', 'cloud', '雾'],
    form: ['柔和、连续且边界不规则的有机轮廓', '由大到小叠加的团块与层次', '轻盈、悬浮和留白形成的视觉感受'],
    structure: ['多个柔性单元聚合成整体', '通过圆角过渡分散局部应力', '利用中空或薄壳降低重量'],
    strategies: ['用柔和边界降低产品的压迫感', '通过分层结构兼顾收纳、支撑或缓冲', '利用透光、通风或中空表达轻盈感'],
    colors: [
      { name: '云雾白', hex: '#F4F4EF', description: '温和的主体色，减少塑料感' },
      { name: '晴空蓝', hex: '#AFCFE0', description: '用于功能区或层次过渡' },
      { name: '暮光紫', hex: '#C8BED8', description: '少量点缀，增加情绪感' },
    ],
  },
  {
    name: '竹',
    englishName: 'bamboo',
    keywords: ['竹', '竹子', '竹叶', 'bamboo'],
    form: ['修长、挺拔的纵向比例', '规律但不完全相同的节段', '细长叶片与收尖轮廓'],
    structure: ['中空管状结构兼顾轻量与强度', '竹节作为局部加强和连接节点', '纵向纤维承担主要受力'],
    strategies: ['通过节段划分功能区域', '利用中空结构减重或形成容纳空间', '让纵向纹理提示握持方向和生长感'],
    colors: [
      { name: '竹青', hex: '#789B69', description: '自然、克制的主色' },
      { name: '竹木色', hex: '#C8AB78', description: '传达温度和可持续感' },
      { name: '墨竹黑', hex: '#30342F', description: '用于结构件和视觉收口' },
    ],
  },
  {
    name: '贝壳',
    englishName: 'seashell',
    keywords: ['贝壳', '海螺', '扇贝', 'shell', 'seashell'],
    form: ['从中心向外生长的螺旋或扇形轮廓', '由密到疏的放射状棱纹', '外部包裹、内部开放的形态关系'],
    structure: ['渐变厚度的薄壳结构', '棱纹同时承担加强筋和触觉提示', '开合或包裹结构保护内部区域'],
    strategies: ['用壳体保护核心部件', '让放射纹理引导光线、空气或触觉', '通过开合动作切换工作状态'],
    colors: [
      { name: '珍珠白', hex: '#F4F0E8', description: '适合作为大面积壳体颜色' },
      { name: '母贝粉', hex: '#DCC8D2', description: '用于内表面或细节反光' },
      { name: '深海灰', hex: '#53636A', description: '用于底座和受力结构' },
    ],
  },
  {
    name: '蜂巢',
    englishName: 'honeycomb',
    keywords: ['蜂巢', '蜂窝', '蜜蜂', 'honeycomb', 'bee'],
    form: ['连续排列的六边形单元', '由局部模块扩展为整体表面', '孔洞、实体和阴影形成的节奏'],
    structure: ['蜂窝夹层以较少材料获得较高刚度', '单元损坏不会立即破坏整体', '模块可拆换、扩展或重新组合'],
    strategies: ['把功能拆分到不同模块', '利用孔隙实现通风、透光或吸音', '通过标准单元控制成本和装配'],
    colors: [
      { name: '蜂蜜黄', hex: '#D9A441', description: '用于识别点和交互区域' },
      { name: '蜡白', hex: '#F1E7CF', description: '柔和的主体底色' },
      { name: '巢穴褐', hex: '#6D5841', description: '强调连接和结构深度' },
    ],
  },
  {
    name: '荷叶',
    englishName: 'lotus leaf',
    keywords: ['荷花', '荷叶', '莲花', '莲叶', 'lotus'],
    form: ['围绕中心展开的放射形态', '圆形叶面与柔和下垂边缘', '叶脉形成由粗到细的层级'],
    structure: ['中心节点向外分配载荷', '叶脉网络支撑大面积薄片', '微观表面结构产生疏水效果'],
    strategies: ['利用放射结构组织功能区域', '以叶脉网络代替厚重实心结构', '通过纹理和排水路径减少污渍残留'],
    colors: [
      { name: '荷叶绿', hex: '#6F9465', description: '自然、安静的主体颜色' },
      { name: '莲瓣粉', hex: '#D9B5BC', description: '用于柔和的人机接触区' },
      { name: '水面青', hex: '#A8C7C2', description: '用于透明或半透明部件' },
    ],
  },
  {
    name: '章鱼',
    englishName: 'octopus',
    keywords: ['章鱼', '八爪鱼', 'octopus', '触手', '吸盘'],
    form: ['中心主体向外延伸的放射布局', '连续弯曲、粗细渐变的柔性肢体', '重复排列的小型吸附单元'],
    structure: ['无硬质骨骼的连续柔性结构', '多肢体独立运动又协同工作', '吸盘通过局部负压适应不同表面'],
    strategies: ['用柔性连接适配不同尺寸和角度', '通过多个接触点分散压力', '利用可替换吸附单元实现固定和防滑'],
    colors: [
      { name: '深海紫', hex: '#55445F', description: '表现柔性和神秘感' },
      { name: '珊瑚橙', hex: '#D27A62', description: '用于高频交互区域' },
      { name: '海雾灰', hex: '#B6BEC1', description: '平衡整体视觉重量' },
    ],
  },
  {
    name: '叶片',
    englishName: 'leaf',
    keywords: ['树叶', '叶片', '叶子', 'leaf', 'vein'],
    form: ['中心叶脉控制方向的尖椭圆轮廓', '从主脉向两侧展开的分支纹理', '薄、轻且具有弹性的曲面'],
    structure: ['分级脉络把载荷传递到主干', '薄片通过曲率获得稳定性', '分支网络兼顾输送与支撑'],
    strategies: ['用分支网络组织线路、气流或支撑', '通过薄壳曲率减少材料', '让纹理同时承担导向和装饰功能'],
    colors: [
      { name: '新叶绿', hex: '#86A96B', description: '清新但不过度鲜艳' },
      { name: '叶脉米白', hex: '#E7E1CF', description: '突出分支纹理' },
      { name: '枝干棕', hex: '#806A50', description: '用于主结构和连接件' },
    ],
  },
  {
    name: '松果',
    englishName: 'pine cone',
    keywords: ['松果', '鳞片', 'pinecone', 'pine cone'],
    form: ['围绕中心轴螺旋排列的重叠鳞片', '由底部厚重到顶部收尖的比例', '重复单元形成清晰的明暗层次'],
    structure: ['鳞片相互覆盖并保护内部', '螺旋排列均匀分配空间和载荷', '材料湿度变化可驱动开合'],
    strategies: ['用重叠单元实现保护、过滤或开合', '通过螺旋排布提升空间利用率', '让环境变化触发被动响应'],
    colors: [
      { name: '松果褐', hex: '#80644A', description: '稳定、耐看的自然色' },
      { name: '松针绿', hex: '#536B55', description: '用于功能提示和软性部件' },
      { name: '木质米', hex: '#D8C5A5', description: '平衡深色结构' },
    ],
  },
];

const PRODUCT_PROFILES: ProductProfile[] = [
  {
    name: '支撑类产品',
    englishName: 'support product',
    keywords: ['支架', '底座', '托架', 'holder', 'stand'],
    functions: ['提供稳定支撑并适配不同尺寸', '明确受力点和防滑接触面', '控制观看、操作或摆放角度'],
    constraints: ['重点验证重心、倾倒角和接触面摩擦', '避免只做外形模仿而没有结构作用'],
    materials: [
      { name: '再生 PC/ABS', description: '适合复杂壳体与中小批量注塑验证' },
      { name: '铝合金', description: '用于主要受力骨架，薄而稳定' },
      { name: '硅胶', description: '用于防滑、缓冲和保护接触面' },
    ],
  },
  {
    name: '容器类产品',
    englishName: 'container product',
    keywords: ['杯', '瓶', '壶', '容器', '水杯', 'bottle', 'cup'],
    functions: ['安全容纳液体或物品', '改善握持、开合与清洁体验', '控制密封、保温或排水'],
    constraints: ['优先考虑食品接触安全、清洁死角和密封结构', '造型不能妨碍真实握持和容量'],
    materials: [
      { name: 'Tritan / 食品级 PP', description: '轻量、耐冲击并适合日常容器' },
      { name: '304 不锈钢', description: '用于需要保温、耐久的内胆' },
      { name: '食品级硅胶', description: '用于密封圈、防滑和柔性连接' },
    ],
  },
  {
    name: '照明类产品',
    englishName: 'lighting product',
    keywords: ['灯', '照明', '台灯', '夜灯', 'lamp', 'light'],
    functions: ['控制光线方向、范围和眩光', '形成直接照明与环境光的切换', '帮助用户理解开关和调光状态'],
    constraints: ['验证散热、光源遮蔽和稳定底座', '装饰纹理不能制造明显眩光'],
    materials: [
      { name: '光扩散 PC', description: '用于灯罩并柔化 LED 点光源' },
      { name: '铝合金', description: '兼顾结构、散热和精细边缘' },
      { name: '木材或再生塑料', description: '用于低温底座，平衡触感与成本' },
    ],
  },
  {
    name: '家具类产品',
    englishName: 'furniture product',
    keywords: ['椅', '凳', '桌', '家具', 'chair', 'table', 'furniture'],
    functions: ['承受人体或物品载荷', '通过曲面和尺寸改善姿态', '便于移动、堆叠或拆装'],
    constraints: ['必须验证人体工学尺寸、连接强度和长期疲劳', '避免尖角、夹手和难以清洁的缝隙'],
    materials: [
      { name: '弯曲胶合板', description: '适合连续曲面和中等跨度结构' },
      { name: '铝合金或钢管', description: '用于清晰、可靠的主承重框架' },
      { name: '织物 / 弹性网布', description: '用于人体接触区和压力分散' },
    ],
  },
  {
    name: '收纳类产品',
    englishName: 'storage product',
    keywords: ['收纳', '盒', '包', '柜', '置物', 'storage', 'bag', 'box'],
    functions: ['分类、容纳并快速找到物品', '根据使用频率组织开口与分区', '在容量、便携和保护之间取舍'],
    constraints: ['分区尺寸要来自真实物品，不要只追求形式', '关注开合次数、提拿受力和清洁维护'],
    materials: [
      { name: '再生 PP', description: '耐用、轻量并适合模块化收纳' },
      { name: '模压毛毡', description: '适合柔和边缘和桌面场景' },
      { name: '竹材 / 胶合板', description: '用于需要刚度和自然触感的外框' },
    ],
  },
  {
    name: '穿戴与配饰',
    englishName: 'wearable accessory',
    keywords: ['首饰', '胸针', '手环', '耳机', '穿戴', '配饰', 'wearable', 'jewelry'],
    functions: ['贴合身体并避免局部压迫', '提供可靠佩戴、拆卸和调节', '用细节表达身份与情绪'],
    constraints: ['必须验证重量、皮肤接触安全和固定结构', '装饰不能妨碍衣物或身体活动'],
    materials: [
      { name: '316L 不锈钢', description: '耐腐蚀，适合结构件和皮肤附近使用' },
      { name: 'TPU / 医用硅胶', description: '用于柔性贴合、缓冲和可调部位' },
      { name: '织物或轻质树脂', description: '用于降低重量并丰富触感' },
    ],
  },
];

const DEFAULT_PRODUCT: ProductProfile = {
  name: '日用产品',
  englishName: 'everyday product',
  keywords: [],
  functions: ['明确核心任务和高频操作路径', '减少不必要部件并提升使用反馈', '平衡功能、制造和维护成本'],
  constraints: ['先验证真实尺寸、受力和装配，再深化外观', '仿生特征必须服务功能或体验'],
  materials: [
    { name: '再生 PC/ABS', description: '适合常见日用壳体和快速样机' },
    { name: '铝合金', description: '用于主要受力件和精细连接' },
    { name: '弹性体', description: '用于握持、防滑和缓冲区域' },
  ],
};

const STYLE_PROFILES: StyleProfile[] = [
  {
    name: '极简',
    englishName: 'minimalist',
    keywords: ['极简', '简约', '克制', 'minimal'],
    formGuidance: '只保留一项最有识别度的仿生特征，减少装饰线和多余分件',
    finishes: [
      { name: '细哑光', description: '降低反光和廉价塑料感' },
      { name: '同色分件', description: '用微小明度差表达结构，而不是堆叠颜色' },
      { name: '圆角精修', description: '统一边缘半径并控制接缝宽度' },
    ],
  },
  {
    name: '自然温和',
    englishName: 'natural and calm',
    keywords: ['自然', '温暖', '治愈', '原木', 'organic'],
    formGuidance: '保留柔和曲率和自然比例，避免过度几何化与高饱和配色',
    finishes: [
      { name: '木纹或纤维纹理', description: '只用于真实接触区或自然材料表面' },
      { name: '低饱和哑光', description: '减少视觉刺激，适合长期使用' },
      { name: '软触感局部包覆', description: '用于握持、靠触和缓冲部位' },
    ],
  },
  {
    name: '未来科技',
    englishName: 'futuristic',
    keywords: ['未来', '科技', '赛博', '智能', 'future', 'tech'],
    formGuidance: '用连续曲面、清晰切线和少量光效表达科技感，不依赖复杂装饰',
    finishes: [
      { name: '细喷砂金属', description: '用于结构骨架和高频触摸区域' },
      { name: '半透明扩散层', description: '用于状态光和内部结构展示' },
      { name: '高光窄边', description: '仅在关键转折处形成精确视觉线' },
    ],
  },
  {
    name: '活泼趣味',
    englishName: 'playful',
    keywords: ['可爱', '趣味', '活泼', '儿童', 'playful', 'cute'],
    formGuidance: '放大一个易理解的形态特征，并用安全圆角和清楚反馈降低学习成本',
    finishes: [
      { name: '柔和撞色', description: '主色与功能色保持清楚层级' },
      { name: '大圆角磨砂', description: '提升安全感并减少尖锐视觉' },
      { name: '触觉提示纹', description: '帮助用户识别按压、握持和开合区域' },
    ],
  },
  {
    name: '优雅精致',
    englishName: 'elegant',
    keywords: ['优雅', '精致', '高级', '轻奢', 'elegant', 'premium'],
    formGuidance: '控制比例、曲率和留白，用少量高质量细节代替密集装饰',
    finishes: [
      { name: '缎面金属', description: '反光柔和，适合小面积结构件' },
      { name: '半透层叠', description: '表达深度但保持整体克制' },
      { name: '精细抛光边缘', description: '用于轮廓收口和触觉接触点' },
    ],
  },
];

const DEFAULT_STYLE: StyleProfile = {
  name: '简洁实用',
  englishName: 'clean and functional',
  keywords: [],
  formGuidance: '优先解决功能、结构和人机问题，再保留一项清楚的仿生识别特征',
  finishes: [
    { name: '低光泽磨砂', description: '适合日常高频使用并减少指纹' },
    { name: '功能分区纹理', description: '用触感区分操作面和非操作面' },
    { name: '统一圆角', description: '建立一致、可制造的边缘语言' },
  ],
};

function profileScore(text: string, keywords: string[]): number {
  const lower = text.toLowerCase();
  return keywords.reduce((score, keyword) => score + (lower.includes(keyword.toLowerCase()) ? keyword.length : 0), 0);
}

function selectProfile<T extends { keywords: string[] }>(text: string, profiles: T[]): T | null {
  const ranked = profiles
    .map((profile) => ({ profile, score: profileScore(text, profile.keywords) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score > 0 ? ranked[0].profile : null;
}

function buildGenericInspiration(name: string): InspirationProfile {
  const safeName = name.trim() || '自然对象';
  return {
    name: safeName,
    englishName: 'natural organism',
    keywords: [],
    form: [`观察${safeName}的整体轮廓、比例和重复节奏`, `提取${safeName}最具识别度的一项曲线或单元`, '把复杂自然形态简化为可制造的几何关系'],
    structure: [`分析${safeName}如何连接、支撑和分配载荷`, `区分${safeName}的主要结构与表面装饰`, '通过薄壳、骨架或模块方式建立可验证结构'],
    strategies: [`从${safeName}的环境适应方式中寻找功能映射`, '让仿生特征解决真实问题，而不只是外观相似', '先做低成本样机验证尺寸、受力和操作路径'],
    colors: [
      { name: '自然基色', hex: '#A8A28F', description: `参考${safeName}的主要低饱和色` },
      { name: '结构深色', hex: '#4F5652', description: '用于受力、连接和操作区域' },
      { name: '功能强调色', hex: '#7C9A92', description: '只用于提示交互和状态变化' },
    ],
  };
}

function buildPrompts(
  inspiration: InspirationProfile,
  product: ProductProfile,
  style: StyleProfile,
  input: BionicInput,
): BionicDesignResult['aiPrompts'] {
  const productName = input.productType.trim() || product.englishName;
  const userContext = input.targetUsers.trim() ? `for ${input.targetUsers.trim()}` : 'for everyday users';
  const goalContext = input.designGoal.trim() ? `focused on ${input.designGoal.trim()}` : 'focused on practical usability';
  const base = `${productName} inspired by ${inspiration.englishName}, ${style.englishName}, ${userContext}, ${goalContext}, manufacturable product design, clear functional structure`;

  return [
    { platform: 'Midjourney', prompt: `${base}, studio product photography, neutral background, realistic materials, restrained details --ar 3:2 --v 6` },
    { platform: 'DALL-E', prompt: `Create a realistic industrial design concept of a ${base}. Show the complete product, believable joints, materials, and human-scale proportions on a clean background.` },
    { platform: 'Stable Diffusion', prompt: `${base}, photorealistic industrial design render, realistic assembly, soft studio lighting, clean background, high detail` },
  ];
}

export function generateBionicDesign(input: BionicInput): BionicDesignResult {
  const inspiration = selectProfile(input.inspiration, INSPIRATION_PROFILES)
    ?? buildGenericInspiration(input.inspiration);
  const product = selectProfile(input.productType, PRODUCT_PROFILES) ?? DEFAULT_PRODUCT;
  const style = selectProfile(input.styleKeywords, STYLE_PROFILES) ?? DEFAULT_STYLE;
  const productName = input.productType.trim() || product.name;
  const targetUsers = input.targetUsers.trim() || '日常使用者';
  const designGoal = input.designGoal.trim() || '提升核心任务的使用体验';

  const formExtraction = {
    form: [
      inspiration.form[0],
      inspiration.form[1],
      `${style.name}控制：${style.formGuidance}`,
    ],
    structure: [
      inspiration.structure[0],
      inspiration.structure[1],
      `${product.name}约束：${product.constraints[0]}`,
    ],
    function: [
      `${inspiration.name}策略：${inspiration.strategies[0]}`,
      product.functions[0],
      `围绕“${designGoal}”验证：${product.constraints[1]}`,
    ],
  };

  return {
    inspirationAnalysis: [
      `灵感对象：${input.inspiration.trim() || inspiration.name}`,
      `规则匹配：${inspiration.name} × ${product.name} × ${style.name}`,
      '',
      `形态观察：${inspiration.form.join('；')}。`,
      `结构观察：${inspiration.structure.join('；')}。`,
      `功能机会：${inspiration.strategies.join('；')}。`,
      '',
      `本方案面向${targetUsers}，目标是${designGoal}。以下内容是规则组合后的前期方向，需要继续验证尺寸、结构和真实使用场景。`,
    ].join('\n'),
    formExtraction,
    designDirections: [
      {
        title: `${inspiration.name}形态转译`,
        description: `将“${inspiration.form[0]}”转化为${productName}的主体轮廓，并按${style.name}原则减少无功能装饰。面向${targetUsers}时，优先保证识别清楚和操作直接。`,
      },
      {
        title: `${inspiration.name}结构转译`,
        description: `以“${inspiration.structure[0]}”组织主要受力和连接关系，同时满足${product.functions[0]}。下一步应通过草模验证${product.constraints[0]}。`,
      },
      {
        title: '使用体验转译',
        description: `围绕“${designGoal}”，把“${inspiration.strategies[1]}”落到高频操作、反馈和维护流程中。针对${targetUsers}，应先测试真实任务，再决定是否保留仿生特征。`,
      },
    ],
    cmfAdvice: {
      colors: inspiration.colors,
      materials: product.materials,
      finish: style.finishes,
    },
    aiPrompts: buildPrompts(inspiration, product, style, input),
    designStatement: `本方案以${input.inspiration.trim() || inspiration.name}为自然灵感，为${targetUsers}设计一款${style.name}风格的${productName}，重点解决“${designGoal}”。设计没有直接复制自然外形，而是提取${inspiration.form[0]}、${inspiration.structure[0]}和${inspiration.strategies[0]}，分别转化为产品轮廓、受力结构与使用功能。材料建议以${product.materials.map((item) => item.name).join('、')}为主，色彩采用${inspiration.colors.map((item) => item.name).join('、')}的低饱和组合，表面处理优先${style.finishes[0].name}。后续需通过尺寸草图、结构样机和目标用户测试，确认仿生特征是否真正改善使用体验。`,
  };
}

export interface BionicRuleCallbacks {
  onProgress?: (stage: number, label: string) => void;
  onComplete: (result: BionicDesignResult) => void;
}

export async function runBionicRuleEngine(
  input: BionicInput,
  callbacks: BionicRuleCallbacks,
): Promise<void> {
  const stages = [
    { stage: 1, label: '正在匹配自然形态与结构特征...' },
    { stage: 2, label: '正在结合产品功能和使用约束...' },
    { stage: 3, label: '正在组合设计方向与 CMF...' },
    { stage: 4, label: '正在整理设计说明和绘图提示词...' },
  ];

  for (const current of stages) {
    callbacks.onProgress?.(current.stage, current.label);
    await new Promise((resolve) => window.setTimeout(resolve, 80));
  }

  callbacks.onComplete(generateBionicDesign(input));
}

