import express from 'express'
import { addNote,deleteNote,updateNote,getAllNotes,getUserNotes } from './note.controller.js';
import {auth} from '../../middleware/auth.js'
const notesRoutes= express.Router()
notesRoutes.post('/',auth,addNote)
notesRoutes.put('/',auth,updateNote)
notesRoutes.delete('/',auth,deleteNote)
notesRoutes.get('/',auth,getAllNotes)
notesRoutes.get('/:createdBy',auth,getUserNotes)




export default notesRoutes;