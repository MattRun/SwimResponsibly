const { models: { User } } = require('../db/models')

const requrieToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const user = await User.findByToken(token)
        req.user = user
        next()
    } catch (err) {
        next(err)
    }
}

const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin){
        return res.status(403).send('YOU! SHALL NOT! PASSSS!!!')
    } else {
        next()
    }
} 

module.exports = {
    requrieToken,
    isAdmin,
}