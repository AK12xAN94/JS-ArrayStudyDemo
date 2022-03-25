const articles = [
    {
        article_id: "6976209276364652558",
        title: "如何在 Vue 的计算属性中传递参数",
        views: 1258,
    },
    {
        article_id: "6976113133358153736",
        title: "Angular数据状态管理框架：NgRx/Store",
        views: 2258,
    },
    {
        article_id: "6975722363241365534",
        title: "Angular管道PIPE介绍",
        views: 1568,
    },
];

// 数组
// for...in
for(const item in articles) {
    console.log(item)
}
// 标准输出：0
// 1
// 2

// 对象
for(const item in articles[0]) {
    console.log(item)
}
// 标准输出：article_id
// title
// views

