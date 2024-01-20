const express=require("express")
const path=require("path")
const fs=require("fs")
const app=express()
// const cors=require("cors")
// app.use(cors())
let data=[{"id":10},{"id":100}]
app.use(express.json())
app.get("/login",(req,res)=>{//make adjust
    
   
    const filepath=path.join(__dirname,"public","login.html")

    fs.readFile(filepath,(err,data)=>{
        //need to handle error
        res.end(data)
    })
    
})
app.get("/data",(req,res)=>{
    res.send(data)
})
app.get("/:sime",(req,res)=>{
    const num=req.params
    console.log(num)
    const value=data.filter(x=>x.id==num)
    res.send(value)
})

app.post("/data",(req,res)=>{
    const body=req.body
    console.log(body)
    data=data.concat(body)
    res.send(data)
})

const PORT=3000
app.listen(PORT)