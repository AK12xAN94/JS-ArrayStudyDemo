const express = require('express')

const app = express()

app.get('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('Hello AJAX GET')
})

app.all('/server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    response.send('Hello AJAX POST')
})

app.all('/json-server', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {
        name: 'jimmy'
    }
    let str = JSON.stringify(data)
    response.send(str)
})

app.all('/delay', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {
        name: 'jimmy'
    }
    let str = JSON.stringify(data)
    setTimeout(() => {
        response.send(str)
    }, 5000);
})

app.get('/jquery', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('Hello AJAX JQUERY')
})

app.all('/jsonp', (request, response) => {
    //设置响应头，允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    const data = {
        exist: 1,
        msg: '用户名已存在',
        name: '一线城市',
        city: ['北京', '上海', '深圳', '广州']
    }
    let cb = request.query.callback
    // response.end(`handle(${JSON.stringify(data)})`)
    response.end(`${cb}(${JSON.stringify(data)})`)
})

app.listen(8000, () => {
    console.log('监听8000端口')
})