
import jwt from 'jsonwebtoken'
  export const auth=(req,res,next)=>{

    let token=req.header("token")
    jwt.verify(token,'mysecertkey',async(err, decoded)=>{
        if(err){
           res.json({message:"invalid Token",err});}
           else{
            next()
           }
        })
        
}