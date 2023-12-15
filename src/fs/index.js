// 在 Node.js 中，fs 模块是文件系统模块（File System module）的缩写，它提供了与文件系统进行交互的各种功能。
// 通过 fs 模块，你可以执行诸如读取文件、写入文件、更改文件权限、创建目录等操作，Node.js 核心API之一。
const fs = require('node:fs')
const fs2 = require('node:fs/promises') 
//读取文件
// fs2.readFile('./index.txt').then(result => {
//     console.log(result.toString())
// })
// fs.readFile('./index.txt', (err, data) => {
//     if (err) {
//         return err
//     }
//     console.log(data.toString())
// })
// let txt = fs.readFileSync('./index.txt')
// console.log(txt.toString())


// 使用可读流读取 使用场景适合读取大文件
// const readStream = fs.createReadStream('./index.txt',{
//   encoding:"utf8"
// })

// readStream.on('data',(chunk)=>{
//   console.log(chunk)
// })

// readStream.on('end',()=>{
//   console.log('close')
// })


// 创建文件夹 如果开启 recursive 可以递归创建多个文件夹
// fs.mkdir('path/test/ccc', { recursive: true },(err)=>{

// })

// 删除文件夹 如果开启recursive 递归删除全部文件夹
// fs.rm('path', { recursive: true },(err)=>{

// })

// 重命名文件 第一个参数原始名称 第二个参数新的名称
// fs.renameSync('./test.txt','./test2.txt')

// 监听文件的变化 返回监听的事件如change,和监听的内容filename
// fs.watch('./test2.txt',(event,filename)=>{
    
//   console.log(event,filename)
// })


// fs.writeFileSync('index.txt', 'java之父\n余胜军')

// fs.writeFileSync('index.txt', '\nvue之父\n鱿鱼须',{
//   flag: 'a'
// })

// fs.appendFileSync('index.txt', '\nunshift创始人\n麒麟哥')

let verse = [
    '待到秋来九月八',
    '我花开后百花杀',
    '冲天香阵透长安',
    '满城尽带黄金甲'
]

let writeStream = fs.createWriteStream('index.txt')

verse.forEach(item => {
    writeStream.write(item + '\n')
})

writeStream.end()

writeStream.on('finish',()=>{
    console.log('写入完成')
})
