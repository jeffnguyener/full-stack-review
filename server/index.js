require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const auth_ctrl = require('./controllers/auth_controller')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('Database is running!', database.listTables())
    app.listen(SERVER_PORT, () => console.log(`Listening on server port ${SERVER_PORT}`))
})

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/details', auth_ctrl.getDetails)