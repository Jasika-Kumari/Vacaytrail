import express from 'express'
import { createTour,getSingleTour,updateTour,getAllTour,deleteTour } from '../controllers/tourController.js'
const router=express.Router()
//create new tour
router.post('/',createTour);
//update  tour
router.put('/:id',updateTour);
//delete  tour
router.delete('/:id',deleteTour);
//get single tour
router.get('/:id',getSingleTour);
router.get('/',getAllTour);

export default router;