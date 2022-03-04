const { RES_ERROR } = require('../constants/response/response.common')
const { ID_NULL, WORD_NULL } = require('../constants/response/response.word')

module.exports = {
    validate_getList: async (ctx, next) => {
        try {
            const { id } = ctx.request.query

            if(id === undefined || id === '') {
                ctx.app.emit('ERROR', ID_NULL, ctx)
                return
            }
            return await next()
        } catch (err) {
            ctx.app.emit('ERROR', RES_ERROR, ctx)
            return
        }
    },

    validate_getDetail: async (ctx, next) => {
        try {
            const { word } = ctx.request.params
            console.log(ctx.request.params)

            if(word === undefined || word === null) {
                ctx.app.emit('ERROR', WORD_NULL, ctx)
                return
            }

            return await next()
        } catch (err) {
            ctx.app.emit('ERROR', RES_ERROR, ctx)
            return
        }
    },
    validate_addWord: async (ctx, next) => {
        try {
            const { word } = ctx.request.body
            
            if(word === undefined || word === null || word === '') {
                ctx.app.emit('ERROR', WORD_NULL, ctx)
                return
            }
            return await next()
        } catch (err) {
            ctx.app.emit('ERROR', RES_ERROR, ctx)
            console.log(err)
            return
        }
    }
}