const express =  require('express')
const router = express.Router()
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
// const upload = multer({ dest: 'public/uploads/'});
const auth = require('../middleware/auth')
const ArticleController = require('../controllers/articles')

// SET FILEFILTER
function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
  
    // To reject this file pass `false`, like so:
    if(!file.originalname.toLowerCase().match('^.*\.(jpg|jpeg|png)$')){

        cb(null, false)
    }
    else
    // To accept the file pass `true`, like so:
        cb(null, true)
  
    // You can always pass an error if something goes wrong:
    cb(new Error('I don\'t have a clue!'))
  
  }
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, "img_"+uuidv4()+"."+ file.originalname.split('.').slice(-1))
    }
})
  let upload = multer({ storage: storage })
// POST Method

router.post('/article',auth,upload.array('overviews',3),ArticleController.newArticle) 


// GET by ID Method

router.get('/article/:id', ArticleController.getOneArticle)

// GET all Method

router.get('/articles',ArticleController.getAllArticle)
// UPDATE by ID Method

router.patch('/article/:id',auth,ArticleController.updateOneArticle)

// DELETE by ID Method

router.delete('/article/:id',auth,ArticleController.deleteOneArticle)
module.exports = router;