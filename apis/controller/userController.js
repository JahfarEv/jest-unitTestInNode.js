const User = require("../../model/userSchema");
const Todo = require("../../model/todoSchema");

//user signup

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(422).json({ error: "Please add all field" });
    }
    const savedUser = await User.findOne({ email: email });
    if (savedUser) {
      return res.status(422).json({ error: "user allready exists" });
    }

    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    res.json({ message: "Saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//user login

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.find({ email: email, password: password });

    if (!user) {
      return res.status(401).json({
        status: "error",
      });
    }
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

//add todo

exports.addtodo = async (req, res) => {
  try {
    const { todo } = req.body;
console.log(todo);
    const Todos = await Todo.create({
      text: todo,
    });
    if (!Todos) {
      return res.status(404).json({
        status: "error",
      });
    }
    res.status(201).json({
      status: "success",
      data: Todos,
    });
  } catch (error) {
    console.log(error);
  }
};

//get todo

exports.getTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find(); 

    if (!allTodos) {
      return res.status(401).json({
        status: "error",
      });
    }
    res.status(200).json({
      status:'success',
      data:allTodos
    })
  } catch (error) {
    console.log(error);
  }
};

//update todo

exports.updateTodo = async (req,res)=>{
  try {
    const {id} = req.params
    const {todo} = req.body
    console.log(todo);
    const updateTodo = await Todo.findByIdAndUpdate(id,{text:todo},)
    if(!updateTodo){
      return res.status(401).json({
        status:'error',

      })
    }
    res.status(200).json({
      status:'success',
      data:{
        text:updateTodo
      }
    })
  } catch (error) {
    console.log(error);
  }
}

// delete todo

exports.deleteTodo = async(req,res)=>{
  try {
    const{id} = req.params

    const deleteTodo = await Todo.findByIdAndDelete(id)
    if(!deleteTodo){
      return res.status(401).json({
        status:'error'
      })
    }
    res.status(200).json({
      status:'success',
      message:'todo deleted successfully'
    })
  } catch (error) {
    console.log(error);
  }
}

