const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const signup = async (req,res,next) => {
    if(!req.body.email || !req.body.password){
        res.json({success:false,error:"Send needed params"})
        return
    }
    const user = new User({email:req.body.email, password:bcrypt.hashSync(req.body.password)})
    try {
        const dataToSend = await user.save()
        res.json(dataToSend)
        
    } catch (error) {
        res.json({message: "Error"})
    }
}

const login = async (req,res,next) => {
    const user = await User.findOne({email:req.body.email})
    try {
        const match = await bcrypt.compare(req.body.password, user.password)
        const accessToken = jwt.sign(JSON.stringify(user),process.env.TOKEN_SECRET)
        if(match){
        // res.json({succes: true, token: accessToken})
            res.json({succes: true, token: accessToken})
        }
        else{
            res.json({succes: false, message: 'Invalid credentials'})

        }
    } catch (error) {
        
    }
    // res.send(user)
}

module.exports = {signup,login}