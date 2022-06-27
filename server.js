const express = require('express')
const app=express()
const cors=require('cors')

const {db,Tasks}=require('./db.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(express.static('/home/aditya/Desktop/WEB-TryOuts/ToDo/frontend'))

app.post('/task',async (req,res)=>{
        const newTask=await Tasks.create({
            name:req.body.name,
            description:req.body.description
        })

        res.json({Success:true})
})

app.get('/tasks',async (req,res)=>{

    const tasks=await Tasks.findAll()

    res.json(tasks)

})

db.sync().then(app.listen(3232,(err)=>{
    if(err)
    throw err
    console.log("Server is running on port 3232")
})).catch((err)=>{
      throw err
})