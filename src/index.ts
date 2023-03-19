import  express,{Request,Response} from 'express'
const app= express()
const PORT=3000;

import  {Router}  from './routes/routes';
import mongoose,{ConnectOptions} from "mongoose";
const bodyParser= require('body-parser')
import swaggerui from 'swagger-ui-express'
// import swaggerDocs from './utils/swagger';
//import * as swaggerDocument from './swagger.json'
const swaggerDocument=require('./swagger.json')
app.use(bodyParser())
app.use(Router)

app.use('/swagger',swaggerui.serve),
app.use('/swagger',swaggerui.setup(swaggerDocument))
mongoose.connect('****************************************').then(()=>{
   
    console.log("connected to database ")
}).catch(err=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log("port running on 3000")

})

