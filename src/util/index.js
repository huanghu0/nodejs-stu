// util 是Node.js内部提供的很多实用或者工具类型的API，方便我们快速开发。

const { exec } = require('node:child_process')
const util = require('node:util')

// const execPromise = util.promisify(exec)

// execPromise('node -v').then(res=>{
//     console.log(res,'res')
// }).catch(err=>{
//     console.log(err,'err')
// })

const fn = (type) => {
    if(type == 1){
        return Promise.resolve('test')
    }
    return Promise.reject('error')
}


const callback = util.callbackify(fn)

callback(1222,(err,val)=>{
    console.log(err,val)
})

