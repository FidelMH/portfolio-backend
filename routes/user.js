// require('dotenv').config();
const express =  require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require('../models/user')
// console.log(process.env.TOKEN_SECRET)
router.post('/signup',async(req,res)=>{
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
})

router.post('/login',async (req,res)=>{
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
})

module.exports = router