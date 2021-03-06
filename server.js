let http = require('http');
let url = require('url');
let port = process.argv[2];
let fs = require('fs');

if (!port) {
    console.log('请指定端口号');
    process.exit(1);
}
let server = http.createServer(function (req, res) {
    let params = url.parse(req.url, true)
    let pathWithQuery = req.url
    console.log(params)
    let path = params.pathname
    let query = params.query
    console.log('有请求发送过来了！路径是' + pathWithQuery)

    if (path === '/') {
        console.log('111111')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        let html = fs.readFileSync('public/index.html').toString();
        let page1 = fs.readFileSync('public/page1.json').toString();
        let li = '';
        JSON.parse(page1).map((item) => {
            li += `<li>${item.id}</li>`;
        })
        html = html.replace('{{page}}', `<ul class="liWrap">${li}</ul>`);
        res.write(html)
        res.end()
    } else if (path === '/main.js') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        res.write(fs.readFileSync('public/main.js'))
        res.end()
    } else if (path === '/1.css') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css;charset=utf-8')
        res.write(fs.readFileSync('public/1.css'))
        res.end()
    } else if (path === '/2.html') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write(fs.readFileSync('public/2.html'))
        res.end()
    } else if (path === '/3.js') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        res.write(fs.readFileSync('public/3.js'))
        res.end()
    } else if (path === '/4.xml') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/xml;charset=utf-8')
        res.write(fs.readFileSync('public/4.xml'))
        res.end()
    } else if (path === '/5.json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json ;charset=utf-8')
        res.write(fs.readFileSync('public/5.json'))
        res.end()
    } else if (path === '/page2.json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json ;charset=utf-8')
        res.write(fs.readFileSync('public/page2.json'))
        res.end()
    } else if (path === '/page3.json') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json ;charset=utf-8')
        res.write(fs.readFileSync('public/page3.json'))
        res.end()
    } else if (path === '/style') {
        console.log('2222222')
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/css;charset=utf-8')
        res.write(`p{color:red}`)
        res.end()
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.write('您输入的路径不存在')
        res.end()
    }

})

server.listen(port)
console.log('监听' + port + '成功\n请打开http://localhost:' + port)