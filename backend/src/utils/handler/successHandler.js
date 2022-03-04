const { RES_SUCCESS } = require('../constants/response/response.common')
module.exports = (info, ctx) => {
    let response = { ...RES_SUCCESS }
    if(info) {
        const { data, message } = info
        message && (response.message = message)
        data && (response.data = data)
    }
    
    ctx.status = 200
    ctx.body = response
}