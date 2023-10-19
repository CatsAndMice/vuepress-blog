module.exports = {
    '/': [
        {
            title: '知识库',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/',
                '/introduce/'
            ]
        },
        {
            title: '常用工具',   // 必要的
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                '/tools/tech-community/'
            ]
        }
    ]
}


