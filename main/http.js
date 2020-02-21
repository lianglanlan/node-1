const http = require('http')
const fs = require('fs')

const server = http.createServer()

const wwwDir = '/Users/lianglanlan/Desktop/code/study/node/使用nodejs模拟apache功能/www'

server.on('request', (req, res) => {
    fs.readFile('./template.html', (err, data) => {
        if (err) {
            return res.end('404 Not Found')
        }
        fs.readdir(wwwDir, (err, files) => {
            if (err) {
                return res.end('cannot find www dir')
            }
            // 将得到的文件与文件名替换到template.html中
            let content = ''
            files.forEach(item => {
                content += `<tr>
                <td data-value="1.txt"><a class="icon file" draggable="true"
                        href="/Users/lianglanlan/Desktop/code/study/node/01/1.txt">${item}</a></td>
                <td class="detailsColumn" data-value="5">5 B</td>
                <td class="detailsColumn" data-value="1577188842">2019/12/24 下午8:00:42</td>
            </tr>`
            })
            data = data.toString().replace('^_^', content)
            res.end(data)
        })

    })
})

server.listen(3010, () => {
    console.log('running...')
})