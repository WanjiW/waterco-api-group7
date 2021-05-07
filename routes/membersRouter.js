import express from "express";
import { Addmember,ViewAllmember,ViewMember,UpdateMember,deletemember } from "../controllers/membersController.js";
const membersRouter=express.Router();

// View A member
membersRouter.get ('/',ViewAllmember)

//View All members
membersRouter.get('/:id',ViewMember )

membersRouter.post('/',Addmember)

membersRouter.put('/:id',UpdateMember)

membersRouter.delete('/:id',deletemember )

export default membersRouter;


