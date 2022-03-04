const { addWord, getList, getDetail } = require('../service/service.word')
const { ALREADY_EXISTED } = require('../utils/constants/response/response.word')
const { RES_SUCCESS } = require('../utils/constants/response/response.common')
module.exports = {

    // 添加单词
    addWord: async (ctx, next) => {
        try {
            const { word } = ctx.request.body
            const target = await getDetail({ word })
            console.log(target)

            if(!target) {
                await addWord()
                ctx.body = {
                    code: 2000,
                    data: null,
                    message: '创建成功'
                }
            } else {
                ctx.app.emit('ERROR', ALREADY_EXISTED, ctx)
            }
        } catch (err) {
            ctx.app.emit('ERROR', err, ctx)
        }
    },

    // 获取单词列表
    getList: async (ctx, next) => {
        ctx.body = await getList()
    },

    // 获取单词详情
    getDetail: async (ctx, next) => {
        const { word } = ctx.request.query
        ctx.body = await getDetail({ word })
    }
}