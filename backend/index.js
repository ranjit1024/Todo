const express = require("express");

const { createTodo,updateTodo} = require("./types");
const { todo } = require("./db");


const app = express();
const port = 3000;

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
    const todo = await todo.find();
    console.log(todo);
    res.json({
        msg: todo,
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