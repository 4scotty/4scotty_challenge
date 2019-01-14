import initDom from './view/init'
import initHandler from './controller/events-handler.js'

const dom = initDom()
initHandler(dom)
