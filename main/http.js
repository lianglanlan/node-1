const http = require('http')
const fs = require('fs')

const server = http.createServer()

const wwwDir = '/Users/lianglanlan/Desktop/code/study/node/www'

server.on('request', (req, res) => {
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            return res.end('404 Not Found')
        }
        fs.readdir(wwwDir, (err, files) => {
            if (err) {
                return res.end('cannot find www dir')
            }
            console.log(files)
        })
        data = data.toString().replace('^_^', '苹果')
        res.end(data)
    })
})

server.listen(3010, () => {
    console.log('running...')
})