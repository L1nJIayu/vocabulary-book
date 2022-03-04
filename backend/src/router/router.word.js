const KoaRouter = require('@koa/router')

const { getList, getDetail, addWord } = require('../controller/controller.word')

const {
    validate_getList,
    validate_getDetail,
    validate_addWord,
} = require('../utils/validator/validator.word')

const router = new KoaRouter({
    prefix: '/word'
})

router.get('/', validate_getList, getList)
router.get('/:word', validate_getDetail, getDetail)
router.post('/', validate_addWord, addWord)

module.exports = router