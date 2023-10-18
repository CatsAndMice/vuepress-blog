const sidebar = require('./sidebar/sidebar')
const path = require('path')
module.exports = {
	// 设置正在使用的语言
	lang: "zh-CN",
	base: "/vuepress-blog/",
	title: "凌览的知识库",
	markdown: {
		lineNumbers: true // 代码块显示行号
	},
	locales: {
		'/': {
			lang: 'zh-CN'
		}
	},
	theme: 'reco',
	themeConfig: {
		type: 'blog',
		autohor: 'Cleaner',
		// 个人信息的头像
		authorAvatar: 'https://www.linglan01.cn/favicon.JPG',
		// 内置搜索
		search: true,
		searchMaxSuggestions: 10,
		// 子侧边栏
		subSidebar: 'auto',
		sidebarDepth: 1,
		lastUpdated: '更新时间',
		// 设置时区偏移量（8小时）
		timezoneOffset: 8 * 60 * 60 * 1000,
		nav: [
			{ text: '首页', link: '/' },
			{ text: '掘金', link: 'https://juejin.cn/user/3350967174565198' },
			{ text: 'Github', link: 'https://github.com/CatsAndMice' }
		],
		sidebar
	},
	keywords:
		"凌览，微信搜索「凌览社」关注我，长期交流学习。不知名前端，Node.js爱好者",
	description:
		"凌览，微信搜索「凌览社」关注我，长期交流学习。不知名前端，Node.js爱好者",
	head: [
		["link", { rel: "icon", href: "https://www.linglan01.cn/favicon.JPG" }],
	]
}