import express from "express";
import membersRouter from "./membersRouter.js"
import premisesRouter from "./premisesRouter.js";
import UsersRouter from "./usersRouter.js"
const router=express.Router();

router.use('/members',membersRouter)
router.use('/premises',premisesRouter)
router.use('/users', UsersRouter)

export default router;