const http = require('http')
const fs = require('fs')
const template = require('art-template')
const nunjucks = require('nunjucks')

const server = http.createServer()

const wwwDir = '/Users/lianglanlan/Desktop/code/study/node/使用nodejs模拟apache功能/www'

http
    .createServer((req, res) => {
        fs.readFile('./template.html', (err, data) => {
            if (err) {
                return res.end('404 Not Found')
            }
            fs.readdir(wwwDir, (err, files) => {
                if (err) {
                    return res.end('cannot find www dir')
                }
                // 使用模板引擎替换data中内容
                data = nunjucks.renderString(data.toString(), {
                    title: '123',
                    files
                })
                res.end(data)
            })
        })
    })
    .listen(3010, () => {
        console.log('running...')
    })