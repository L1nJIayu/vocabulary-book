const app = require('./app')
const KoaBody = require('koa-body')

const word_router = require('./router/router.word')
const errorHandler = require('./utils/handler/errorHandler')
const successHandler = require('./utils/handler/successHandler')

/* 中间件 */
app.use(KoaBody())

/* API */
app.use(word_router.routes())



/* 错误处理 */
app.on('ERROR', errorHandler)

/* 成功处理 */
// app.on('SUCCESS', successHandler)