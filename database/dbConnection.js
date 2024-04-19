import mongoose from "mongoose"
export function dbConnection(){
mongoose.connect('mongodb://127.0.0.1:27017/myblog')
.then(()=>{
    console.log("db connected");})
    .catch((err)=>{
        console.log('db error')
    })
}