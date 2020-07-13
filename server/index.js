require('dotenv').config()
const massive = require('massive'),
express = require('express'),
mainCtrl = require('./controllers/controller'),
authCtrl = require('./controllers/authController'),
postCtrl = require('./controllers/postController'),
session = require('express-session'),
app = express(),
{CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env


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

app.listen(SERVER_PORT, () => {console.log(`Natalie's server tuned in on port ${SERVER_PORT}`)})