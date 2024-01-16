import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
// import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的文档",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.png',
    outlineTitle: "文章目录",
    outline: [2, 6],
    nav: [
      { text: '首页', link: '/' },
      { text: '文章示例', link: '/markdown-examples' },
      {
        text: '前端', items: [
          { text: '基础', link: '/docs/front-end/base/' },
          { text: 'vue', link: '/docs/front-end/vue/' },
          { text: '移动端', link: '/docs/front-end/mobile/' }
        ]
      }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    // sidebar: { "/docs/front-end/vue/": set_sidebar("/docs/front-end/vue") },
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }

      }
    },
    footer: {
      copyright: "copyright © 2023-zl"
    }
  },

})
