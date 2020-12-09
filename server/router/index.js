//所有的接口文件
const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        code: 200,
        message: '简单的接'
    })
})


module.exports = { router };