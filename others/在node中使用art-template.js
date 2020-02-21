// 1.安装 npm install art-template --save
// 2、使用require方式加载。参数中的art-template就是包的名字
const template = require('art-template')
// 3.使用render方法
let ret = template.render('hello {{ name }}', {
    name: 'Jack'
})

console.log(ret)    //命令行使用node执行本文件，打印结果为 'hello jack'

