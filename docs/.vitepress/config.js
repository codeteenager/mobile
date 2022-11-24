module.exports = {
    title: '移动平台',
    description: '移动开发平台相关内容',
    base: '/mobile/',
    markdown: {
        lineNumbers: true, //显示代码行数
    },
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/mobile/favicon.ico' }]
    ],
    themeConfig: {
        outlineTitle: '在本页面',
        lastUpdatedText: '最近更新时间',
        nav: [
            // {
            //     text: '博文',
            //     link: "/web/index"
            // }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present codeteenager'
        },
        socialLinks: [{ icon: "github", link: "https://github.com/codeteenager/mobile" }],
        sidebar: {
            // "/web/": [

            //     {
            //         text: "前端基础",
            //         items: [
            //             {
            //                 text: "介绍",
            //                 link: "/web/foundation/index",
            //             },
            //             {
            //                 text: "JavaScript性能优化",
            //                 link: "/web/foundation/javascript-optimization",
            //             },
            //             {
            //                 text: "中后台解决方案",
            //                 link: "/web/admin",
            //             }
            //         ],
            //     }
            // ]
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
}