import initDom from './view/init'
import initHandler from './controller/events-handler.js'

console.log('TEST =======================')
const dom = initDom()

console.log('DOM ================', dom)
initHandler(dom)
