module.exports = [
    {
        title: '代码片段',   // 必要的
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
           '/code-snippets/a/',
           '/code-snippets/paste/'
        ]
    },
    {
        title: '关于',   // 必要的
        path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children:[
            '/about/'
        ]
    }
]


