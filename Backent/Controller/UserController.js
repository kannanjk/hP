const userModel = require('../Models/Users')

const register = async (req, res) => {
    try {
        const existUser = await userModel.findOne({ email: req.body.email })
        if (existUser) {
            return res.status(200).send({ message: "User alredy exist" })
        }
        const newUser = new userModel(req.body)
        newUser.save()
        res.status(200).send({ newUser, success: true })
    } catch (error) {
        res.status(500).send({ error })
    }
}

const login = async (req, res) => {
    console.log("kannan");
    const { email, password } = req.body
    const us = userModel(req.body)
    try {
        const user = await userModel.findOne({email})
        if (user) {
            res.send({
                message: "Login success",
            })
        } else {
            res.send({
                message:"User Not found"
            })
        }
    } catch (error) {
        res.send({
            message:"Server error"
        })
    }
}

module.exports = login