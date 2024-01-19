const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const port = 6969

mongoose.connect('mongodb+srv://nischal:nischal123@cluster0.ea3vgbj.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{console.log('connected to database.')})

app.use(cors())
app.use(bodyParser.json())

app.use('/api1',todoRoutes)

app.send((req,res)=>{
    res.send("<h1>Hello world.</h1>")
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})