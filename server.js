const dotenv = require('dotenv')
dotenv.config({path:'./config/.env'})
const connectDB = require('./config/connectDB')
const app = require('./App')

connectDB()

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})