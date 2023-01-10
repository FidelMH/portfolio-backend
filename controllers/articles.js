const Article = require('../models/articles')

const newArticle =async (req,res,next)=>{
    const data =  new Article(
        {
        title:  req.body.title,
        description: req.body.description,
        text:  req.body.text,
        images:  req.body.images
        })
    
        try {
            const dataTosave = await data.save()
            res.status(200).json(dataTosave)
    
        } catch (error) {
            res.status(400).json({message: error.message})
        }
}

const getOneArticle = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const data = await Article.findById(id).select('-__v')
        if(data.length==0){
            res.json({error:'Not Found'})
        }
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllArticle = async (req,res,next) =>{
    try {
        const data = await Article.find().select('-__v')
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateOneArticle = async (req,res,next) =>{
    try {
        const id =  req.params.id
        const data = req.body
        const options = {new:true}
        const result = await Article.findOneAndUpdate({_id:id},data,options)
        res.json(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const deleteOneArticle = async (req,res,next) =>{
    try {
        const id = req.params.id
        const data = await Article.findByIdAndDelete(id)
        res.send(`${data.title} has been deleted..`)
    } catch (error) {
        
    }
}

module.exports = {newArticle,getOneArticle,getAllArticle,updateOneArticle,deleteOneArticle}