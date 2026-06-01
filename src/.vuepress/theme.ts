import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // ========== 基本配置 ==========
  hostname: "https://wiki.mrlining.cn",
  
  author: {
    name: "Lin",
    url: "https://github.com/hh127",
    email: "894072666@qq.com",
  },
  
  license: "MIT",
  
  favicon: "/favicon.ico",
  
  logo: "https://s21.ax1x.com/2025/02/23/pElsvwQ.png",
  
  // ========== 布局配置 ==========
  navbar: [
    { text: "首页", link: "/", icon: "home" },
    { text: "计量", link: "/01.计量/", icon: "ruler" },
    { text: "计价", link: "/02.计价/", icon: "calculator" },
    { text: "法规", link: "/08.法规/", icon: "gavel" },
    { text: "收藏", link: "/06.收藏夹/", icon: "star" },
    {
      text: "索引",
      icon: "archive",
      children: [
        { text: "分类", link: "/category/", icon: "folder" },
        { text: "标签", link: "/tag/", icon: "tags" },
        { text: "时间线", link: "/timeline/", icon: "clock" },
      ],
    },
    { text: "关于", link: "/05.关于/", icon: "user" },
  ],
  
  // 侧边栏配置
  sidebar: {
    // 计量侧边栏 - 手动配置确保顺序
    "/01.计量/": [
      {
        text: "土建计量",
        icon: "building",
        prefix: "01.土建计量/",
        collapsible: true,
        children: [
          {
            text: "建筑面积",
            icon: "ruler",
            prefix: "01.建筑面积/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "土石方",
            icon: "mountain",
            prefix: "02.土石方/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "混凝土",
            icon: "cube",
            prefix: "03.混凝土/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "砌筑",
            icon: "th-large",
            prefix: "04.砌筑/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "装饰装修",
            icon: "paint-brush",
            prefix: "05.装饰装修/",
            collapsible: true,
            children: "structure",
          },
        ],
      },
      {
        text: "安装计量",
        icon: "cog",
        prefix: "02.安装计量/",
        collapsible: true,
        children: [
          {
            text: "给排水",
            icon: "tint",
            prefix: "01.给排水/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "电气",
            icon: "bolt",
            prefix: "02.电气/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "暖通",
            icon: "wind",
            prefix: "03.暖通/",
            collapsible: true,
            children: "structure",
          },
        ],
      },
      {
        text: "钢筋计量",
        icon: "bars",
        prefix: "03.钢筋计量/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "市政计量",
        icon: "road",
        prefix: "04.市政计量/",
        collapsible: true,
        children: "structure",
      },
      {
        text: "园林计量",
        icon: "leaf",
        prefix: "05.园林计量/",
        collapsible: true,
        children: "structure",
      },
    ],
    
    // 计价侧边栏
    "/02.计价/": "structure",
    
    // 法规侧边栏 - 手动配置确保顺序
    "/08.法规/": [
      {
        text: "法律法规",
        icon: "gavel",
        prefix: "01.法律法规与标准库/",
        collapsible: true,
        children: [
          {
            text: "现行法律",
            icon: "gavel",
            prefix: "10.现行法律/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "司法解释",
            icon: "balance-scale",
            prefix: "20.司法解释/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "司法解释性质文件",
            icon: "file-alt",
            prefix: "30.司法解释性质文件/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "行政法规",
            icon: "landmark",
            prefix: "40.行政法规/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "部门规章",
            icon: "building",
            prefix: "50.部门规章/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "废止法律",
            icon: "ban",
            prefix: "60.废止法律/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "指导性案例",
            icon: "balance-scale",
            prefix: "70.指导性案例/",
            collapsible: true,
            children: [
              {
                text: "最高检指导性案例",
                icon: "balance-scale",
                prefix: "01.第1-10批/",
                collapsible: true,
                children: "structure",
              },
              {
                text: "刑事审判参考",
                icon: "gavel",
                prefix: "80.刑事审判参考/",
                collapsible: true,
                children: "structure",
              },
            ],
          },
        ],
      },
      {
        text: "工程建筑规范",
        icon: "building",
        prefix: "02.工程建筑规范/",
        collapsible: true,
        children: [
          {
            text: "国家规范",
            icon: "book-open",
            prefix: "01.国家规范/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "行业规范",
            icon: "industry",
            prefix: "02.行业规范/",
            collapsible: true,
            children: "structure",
          },
        ],
      },
      {
        text: "标准合同范本与条款库",
        icon: "file-contract",
        prefix: "03.标准合同范本与条款库/",
        collapsible: true,
        children: [
          {
            text: "通用条款",
            icon: "file-alt",
            prefix: "01.通用条款/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "专用条款",
            icon: "file-signature",
            prefix: "02.专用条款/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "补充协议",
            icon: "file-medical",
            prefix: "03.补充协议/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "合同示范文本",
            icon: "file-contract",
            prefix: "04.合同示范文本/",
            collapsible: true,
            children: "structure",
          },
        ],
      },
      {
        text: "企业制度与管理文件",
        icon: "building",
        prefix: "04.企业制度与管理文件/",
        collapsible: true,
        children: [
          {
            text: "造价管理制度",
            icon: "calculator",
            prefix: "01.造价管理制度/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "招投标管理制度",
            icon: "gavel",
            prefix: "02.招投标管理制度/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "合同管理制度",
            icon: "file-contract",
            prefix: "03.合同管理制度/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "项目管理制度",
            icon: "project-diagram",
            prefix: "04.项目管理制度/",
            collapsible: true,
            children: "structure",
          },
          {
            text: "财务管理制度",
            icon: "money-bill",
            prefix: "05.财务管理制度/",
            collapsible: true,
            children: "structure",
          },
        ],
      },
    ],
    
    // 收藏夹侧边栏
    "/06.收藏夹/": "structure",
    
    // 关于侧边栏
    "/05.关于/": "structure",
    
    // 其他页面使用结构化侧边栏
    "/": "structure",
  },
  
  // 路径导航
  breadcrumb: true,
  breadcrumbIcon: true,
  
  // 标题深度（侧边栏显示的标题级别）
  headerDepth: 2,
  
  // 侧边栏图标
  sidebarIcon: true,
  
  // 页面信息
  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  
  // 页脚
  footer: 'Lin | <a href="https://github.com/hh127">MIT License</a> | <a href="http://beian.miit.gov.cn/">桂ICP备2024034950号</a>',
  copyright: "Copyright © 2021-present Lin",
  
  // ========== 外观配置 ==========
  // 主题色
  themeColor: {
    blue: "#2196f3",
    indigo: "#3f51b5",
    purple: "#9c27b0",
    red: "#f44336",
    orange: "#ff9800",
    green: "#4caf50",
    teal: "#009688",
  },
  
  // 暗色模式
  darkmode: "toggle",
  
  // 全屏
  fullscreen: true,
  
  // 返回顶部
  backToTop: true,
  
  // ========== 功能配置 ==========
  // 搜索配置
  search: {
    provider: "searchPro",
    locales: {
      "/": { placeholder: "搜索" },
    },
  },
  
  // 代码配置
  codeTabs: true,
  
  // 图片预览
  photoSwipe: true,
  
  // SEO
  seo: true,
  
  // 站点地图
  sitemap: true,
  
  // 复制代码按钮
  copyCode: true,
  
  // 版权保护
  copyright: true,
  
  // ========== 插件配置 ==========
  plugins: {
    // 组件插件
    components: {
      components: ["Badge", "VPCard"],
    },
    
    // Markdown 增强（简化配置）
    mdEnhance: {
      // 代码组
      codetabs: true,
      // 选项卡
      tabs: true,
      // 任务列表
      tasklist: true,
      // 数学公式
      math: true,
      // 图表
      chart: true,
      // 流程图
      flowchart: true,
      // Mermaid 图表
      mermaid: true,
      // 演示文稿
      presentation: true,
    },
  },
});
