const express =require("express")
const os = require('os')

const app = express()
app.get('/', (req,res)=>{
    res.send(`Hi, I am testing kubernetes and docker!`)
})

const port = 8080
app.listen(port,()=>console.log(`listening on port ${port}`))


module.exports = app;