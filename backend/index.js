const express = require("express");
const cors = require("cors")
const { createTodo,updateTodo} = require("./types");
const { todo } = require("./db");


const app = express();
app.use(cors())
const port = 3000;

let counter = 0;
app.use(express.json());


app.post("/todo",async(req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            mag:"you sent the wrong Input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        descripition: createPayload.descripition,
        completed: false
    });
    res.json({
        msg:"Task is Created"
    })
})

app.get("/todos", async (req, res)=>{
    const allTodo = await todo.find();
    // console.log(allTodo);
    counter++;
    console.log(counter)
    res.json({
        allTodo,
    })

})

app.put("/completed", async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            mag:"sending wrong data"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg:"to do Marked as completed"
    })
    //update in mongo db
})

app.listen(port, ()=>{
    console.log(`listing on port number ${port}`)
})