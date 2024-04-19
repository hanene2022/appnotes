import { userModel } from "../../../database/models/user.model.js";
import bcrypt from 'bcrypt'
const signUp = async(req,res)=>{
    const {name,email, password}= req.body
    const user= await userModel.findOne({email});
    if(user){
        return res.json({message:"user already exists"})
    } else {
        const hash= bcrypt.hashSync(password, 10)
        await userModel.insertMany({name, email,password:hash});
        res.json({messsage:"success"})
    }
};

const signIn= async(req,res)=>{
    const {email, password}= req.body
    const user= await userModel.findOne({email});
    if(user && bcrypt.compareSync(password, user.password)){
        res.json({message:"login with token"});
    } else{
        res.json({message:"user not found or password in correct"})
    }
}


export {signUp, signIn}