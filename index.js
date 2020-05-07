require('dotenv').config()
console.log(process.env.SESSTION_SECRET)
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const userRouter = require('./routes/user.router')
const authRouter =  require('./routes/auth.router')
const loginAuth = require('./midlewares/auth.midleware')
const productRouter = require('./routes/product.router')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSTION_SECRET))
app.use(express.static('puplic'))

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', name: 'Bin!' })
})

app.use('/users', loginAuth.requireAuth, userRouter)
app.use('/auth', authRouter)
app.use('/product', productRouter)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))