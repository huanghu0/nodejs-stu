// 子进程是Nodejs核心API，如果你会shell命令，他会有非常大的帮助，或者你喜欢编写前端工程化工具之类的，他也有很大的用处，以及处理CPU密集型应用。

const { exec,execSync,execFile,spawn,fork } = require('node:child_process')
const path = require('node:path')
// exec('node -v',(err,stdout,stderr) => {
//   if(err){
//     return err
//   }
//   console.log(stdout.toString())
// })


// const nodeVersion  = execSync('node -v')
// console.log(nodeVersion.toString("utf-8"))

// execSync("start chrome http://www.baidu.com --incognito")

// execFile(path.resolve(process.cwd(),'./bat.cmd'),null,(err,stdout)=>{
//   console.log(stdout.toString())
// })


//                       命令      参数  options配置
// const { stdout } = spawn('netstat',['-an'],{})

//返回的数据用data事件接受
// stdout.on('data',(steram)=>{
//     console.log(steram.toString())
// })

const testProcess = fork('./test.js')

testProcess.send('我是主进程')

testProcess.on("message",(data)=>{
    console.log('我是主进程接受消息111：',data)
})



