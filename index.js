if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
// console.log(process.env.TOKEN_SECRET)
const express = require('express')
const articles_route = require('./routes/articles')
const user_route = require('./routes/user')
const cors = require('cors');

const app = express()
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use('/api',articles_route)
app.use('/user',user_route)


app.listen(3000,()=>{
    console.log('Server has started!')
})