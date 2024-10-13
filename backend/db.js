const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ranjit:iamranjit@cluster0.ehxzb.mongodb.net/Todo");

const todoSchema = mongoose.Schema({
    title:String,
    descripition:String,
    completed:Boolean
})

const todo = mongoose.model("todo", todoSchema)
module.exports = {
    todo
}