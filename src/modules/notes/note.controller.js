import { noteModel } from "../../../database/models/notes.model.js";
const addNote= async(req,res)=>{
    const {title, desc, createdBy}= req.body
    const note = await noteModel.insertMany( {title, desc, createdBy})
    res.json ({message: "note added"})
}

const updateNote= async (req,res)=>{
    const {title,desc,id}= req.body
   let note = await noteModel.findByIdAndUpdate(
    {_id:"661e4533834dca7713f3b243"}
    ,{title:"learn node"}
    ,{new:true}
)
        if(!note) return res.json({message:"note not found"})
        res.json({message:"success",note})
};
const deleteNote= async(req,res)=>{
    const {id}= req.body;
   let note = await noteModel.findByIdAndDelete({_id:"661e4575834dca7713f3b238"});
        if(!note) return res.json({message:"note not found"})
        res.json({message:"success",note})
};

// const getAllNotes=async(req,res)=>{
//     let note= await noteModel.find({})
//     res.json({message:"success",note})
// }

const getAllNotes=async(req,res)=>{
    let note= await noteModel.find({}).populate('createdBy','name -_id')
    res.json({message:"success",note})
}
const getUserNotes=async(req,res)=>{

    const {createdBy}= req.params
        let note= await noteModel.find({createdBy})
        res.json({message:"success",note});
    }
export {addNote, updateNote,deleteNote,getAllNotes,getUserNotes}