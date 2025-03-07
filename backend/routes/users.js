import express from 'express'
import {updateUser,getAllUser,getSingleUser,deleteUser} from '../controllers/userController.js'
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js'
const router=express.Router()

//update user
router.put('/:id',verifyUser,updateUser);
//delete  user
router.delete('/:id',deleteUser,verifyUser);
//get single user
router.get('/:id',verifyUser,getSingleUser);
//get all user
router.get('/',getAllUser,verifyAdmin);





export default router