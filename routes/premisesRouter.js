import express from "express";
import { Addpremise, deletepremise, Updatepremise, ViewAllpremises, ViewMemberpremise, Viewpremise } from "../contollers/premisesController.js";
const premisesRouter=express.Router();

// View All member
premisesRouter.get ('/',ViewAllpremises)

//View A premises
premisesRouter.get('/:id',Viewpremise)

premisesRouter.post('/',Addpremise)

premisesRouter.put('/:id',Updatepremise)

premisesRouter.delete('/:id',deletepremise )

premisesRouter.get('/:id',ViewMemberpremise)

export default premisesRouter;


