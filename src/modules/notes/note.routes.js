import express from 'express'
import { addNote,deleteNote,updateNote,getAllNotes,getUserNotes } from './note.controller.js';
const notesRoutes= express.Router()
notesRoutes.post('/',addNote)
notesRoutes.put('/',updateNote)
notesRoutes.delete('/',deleteNote)
notesRoutes.get('/',getAllNotes)
notesRoutes.get('/:createdBy',getUserNotes)




export default notesRoutes;