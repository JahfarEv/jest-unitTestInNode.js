const mongoose = require('mongoose')
const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        requierd:true
    }
})
const todo = mongoose.model("todo",todoSchema)
module.exports = todo