const EventEmitter = require('node:events');

// const event = new EventEmitter()

// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test', (data) => {
//     console.log(data)
// })

// event.on('test', (data) => {
//     console.log(data)
// })
// event.on('test',(data)=>{
//     console.log(data)
// })
// event.on('test',(data)=>{
//     console.log(data)
// })

// event.emit('test', 'xmxmxmxmx')

// const event = new EventEmitter()
// event.setMaxListeners(20)
// event.once('test', (data) => {
//     console.log(data)
// })

// event.emit('test', 'xmxmxmxmx1')
// event.emit('test', 'xmxmxmxmx2')

const event = new EventEmitter()

const fn = (msg) => {
   console.log(msg)
}
event.on('test', fn)
event.off('test', fn)

event.emit('test', 'xmxmxmxmx1')
event.emit('test', 'xmxmxmxmx2')
