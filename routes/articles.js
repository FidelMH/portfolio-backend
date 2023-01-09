const express =  require('express')
const router = express.Router()
const Music = require('../models/articles')
const auth = require('../middleware/auth')

// POST Method

router.post('/post',async (req,res)=>{
    
    const data =  new Music(
    {
    title:  req.body.title,
    artist: req.body.artist,
    serie:  req.body.serie,
    voice:  req.body.voice,
    lang:   req.body.lang,
    cat:    req.body.cat
    })

    try {
        const dataTosave = await data.save()
        res.status(200).json(dataTosave)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
   
})


// GET by ID Method

router.get('/get/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const data = await Music.findById(id).select('-__v')
        if(data.length==0){
            res.json({error:'Not Found'})
        }
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// GET all Method

router.get('/get',async (req,res)=>{
    try {
        const data = await Music.find().select('-__v')
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// UPDATE by ID Method

router.patch('/update/:id',auth,async (req,res)=>{
    try {
        const id =  req.params.id
        const data = req.body
        const options = {new:true}
        const result = await Music.findOneAndUpdate({_id:id},data,options)
        res.json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// DELETE by ID Method

router.delete('/delete/:id',auth,async (req,res)=>{
    try {
        const id = req.params.id
        const data = await Music.findByIdAndDelete(id)
        res.send(`${data.title} has been deleted..`)
    } catch (error) {
        
    }
})
module.exports = router;