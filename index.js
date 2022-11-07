import express from 'express'
import cors from 'cors'
import RouteUsers from './routes/users.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.use('/users', RouteUsers)

app.listen(3000)