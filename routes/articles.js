const express =  require('express')
const router = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'public/uploads/'});
const auth = require('../middleware/auth')
const ArticleController = require('../controllers/articles')

// POST Method

router.post('/article',upload.array('overviews'),auth,ArticleController.newArticle) 


// GET by ID Method

router.get('/article/:id', ArticleController.getOneArticle)

// GET all Method

router.get('/article',ArticleController.getAllArticle)
// UPDATE by ID Method

router.patch('/article/:id',auth,ArticleController.updateOneArticle)

// DELETE by ID Method

router.delete('/article/:id',auth,ArticleController.deleteOneArticle)
module.exports = router;