// os 模块可以跟操作系统进行交互

const os = require('node:os')
const { exec } = require('child_process');

console.log(os.type())

console.log(os.platform())

console.log(os.release())

console.log(os.homedir())

console.log(os.arch())

console.log(os.cpus())

console.log(os.networkInterfaces())

function openBrowser(url) {
  if (os.platform() === 'darwin') {  // macOS
    exec(`open ${url}`); //执行shell脚本
  } else if (os.platform() === 'win32') {  // Windows
    exec(`start ${url}`); //执行shell脚本
  } else {  // Linux, Unix-like
    exec(`xdg-open ${url}`); //执行shell脚本
  }
}

// Example usage
openBrowser('https://www.juejin.cn');