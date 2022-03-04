const Word = require('../models/Word')

module.exports = {
    addWord: async (params) => {
        // console.log('params', params)
        return await Word.create(params)
    },
    getList: async (params) => {
        return await Word.findAll()
    },
    getDetail: async (params) => {
        const whereOpt = {
            ...params
        }
        return Word.findOne({ whereOpt})
    }
}