const express = require('express')
const app = express()
const port = 6969

app.send((req,res)=>{
    res.send("<h1>Hello world.</h1>")
})

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})