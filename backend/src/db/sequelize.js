const Sequelize = require('sequelize')

const { db, u, p, host, dialect } = require('../config/config.db')

const sequelize = new Sequelize(db, u, p, { host, dialect })



module.exports = sequelize




// testConnect()

// 测试链接
async function testConnect() {
    try {
        await sequelize.authenticate()
        console.log('数据库连接成功')
    } catch (err) {
        console.log(err)
    }

}