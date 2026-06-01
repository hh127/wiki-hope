import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import theme from "./theme.js";

export default defineUserConfig({
  // 基础配置
  base: "/",
  lang: "zh-CN",
  title: "Lin's Wiki",
  description: "工程造价专业知识库，记录工程造价、合约管理、法律法规等专业知识。",

  // 主题
  theme,

  // 页面配置
  pagePatterns: ["**/*.md", "!**/*.snippet.md"],

  // 站点地图
  sitemap: {
    hostname: "https://wiki.mrlining.cn",
  },

  // SEO
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "keywords", content: "工程造价,预算编制,合约管理,法律法规,计量,计价,造价知识库" }],
    ["meta", { name: "theme-color", content: "#11a8cd" }],
    ["meta", { name: "baidu-site-verification", content: "7F55weZDDc" }],
    // 霞鹜文楷字体
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.7.0/style.css" }],
  ],

  // 构建配置
  bundler: viteBundler({
    viteOptions: {
      // Vite 配置
    },
  }),
});
