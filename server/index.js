require('dotenv').config()
require('dotenv').config()
const massive = require('massive'),
    express = require('express'),
    app = express(),
    authCtrl = require('./controllers/authController'),
    postCtrl = require('./controllers/postController'),
    session = require('express-session'),
    { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env


app.use(express.json())

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db, db')
    console.log('Natalie, your db is connected!')
}).catch(error => {
    console.log(error)
})

app.post('/Auth/register', authCtrl.register)
app.post('/Auth/login', authCtrl.login)
app.post('api/auth/logout', authCtrl.logout)
app.post('/new/:userId', postCtrl.createPost)
app.get('/posts/:userId', postCtrl.getPosts)
app.get('/posts', postCtrl.getAllPosts)
app.get('/post/:post_id', postCtrl.selectPost)
app.delete('/post/delete/:post_id', postCtrl.deletePost)

app.listen(SERVER_PORT, () => {console.log(`Natalie's server tuned in on port ${SERVER_PORT}`)})