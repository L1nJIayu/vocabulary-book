module.exports = (err, ctx) => {

    let status = 500

    switch(err.code) {
        case 4000:
            status = 400
            break
        case 5000:
            status = 500
            break
    }

    ctx.status = status
    ctx.body = err
}