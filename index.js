import express  from 'express'
import userRouter from './src/modules/user/user.routes.js';
import { dbConnection } from './database/dbConnection.js';
import notesRoutes from './src/modules/notes/note.routes.js';
const app= express();
const port= 4000
dbConnection()
app.use(express.json())
app.use('/user',userRouter)
app.use('/note', notesRoutes)



app.listen(port,()=>{console.log('server is running ')})