# Wiki 修改记录

## 2026-06-01

### 修复：法规正文显示宽度溢出问题

**问题描述**：法规库正文显示宽度不正常，需要向右滑动才能查看完整内容。

**原因分析**：
1. `palette.scss` 中设置了固定宽度 `$content-width: 1200px`
2. 法规文件中有长段落（特别是英文条约内容）没有自动换行
3. 法规文件中的 HTML 内联样式（`<p style="text-align:center">`、`<font color>`）影响布局

**修改文件**：
- `src/.vuepress/styles/index.scss`

**修改内容**：
```scss
// 文章内容样式
.vp-page-content,
.theme-hope-content {
  // 防止内容溢出
  overflow-x: auto;
  word-break: break-word;
  overflow-wrap: break-word;

  img {
    max-width: 100%;
    border-radius: 8px;
  }

  // 段落和列表项防溢出
  p, li, td, th, pre, code {
    word-break: break-word;
    overflow-wrap: break-word;
  }

  // 代码块横向滚动
  pre {
    overflow-x: auto;
    max-width: 100%;
  }

  // 表格响应式
  table {
    display: block;
    overflow-x: auto;
    max-width: 100%;
  }
}
```

**修复效果**：
- 内容区支持横向滚动显示溢出内容
- 长段落自动换行
- 代码块和表格响应式显示
- 兼容 vuepress-theme-hope 的 `.theme-hope-content` 选择器
