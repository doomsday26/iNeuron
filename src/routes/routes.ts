import express,{Request,Response} from 'express'
const Router= express.Router()
const homeController=require('../controllers/users')


Router.get('/home',homeController.homedetail)
Router.get('/oneUser/:id',homeController.getOneUser)
Router.put('/update',homeController.updateOneUser)
Router.post('/create',homeController.createOneUser)
Router.delete('/delete/:id',homeController.deleteOneUser)

Router.get('/about',(req:Request,res:Response)=>{
    res.json({data:"about page"})
})



export {Router}



// "content": {
//     "message": {
//       "schema": {
//         "type":"string"
//       }
//     },"data":{
//    "schema":{
//     "type":"array",
//     "items":{
//       "$ref":"#/definitions/User"
//     }
//    }
//     }
//   }