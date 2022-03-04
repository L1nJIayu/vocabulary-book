const Koa = require('koa')
const { port } = require('./config/config.default')

const app = new Koa()

app.listen(port, () => {
    console.log('\x1B[32m\n======= 项目启动成功 =======\x1B[0m')
    console.log(` - 访问地址：\x1B[36mhttp://localhost:${ port }\x1B[0m`)
    console.log('\n\n\n\n')
})

module.exports = app