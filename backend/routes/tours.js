import express from 'express'
import { createTour,getSingleTour,updateTour,getAllTour,deleteTour,getTourBySearch, getFeaturedTour, getTourCount } from '../controllers/tourController.js'
const router=express.Router()
//create new tour
router.post('/',createTour);
//update  tour
router.put('/:id',updateTour);
//delete  tour
router.delete('/:id',deleteTour);
//get single tour
router.get('/:id',getSingleTour);
//get all tours
router.get('/',getAllTour);
//get tours by search
router.get("/search/getTourBySearch",getTourBySearch);
router.get("/search/getFeaturedTours",getFeaturedTour);
router.get("/search/getTourCount",getTourCount);


export default router;