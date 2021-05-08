import express from "express";

import routesRouter from "./routesRouter.js";
import billsRouter from "./billsRouter.js";
import paymentsRouter from "./paymentsRouter.js";
import membersRouter from "./membersRouter.js"
import premisesRouter from "./premisesRouter.js";
import UsersRouter from "./usersRouter.js"

const router = express.Router();

router.use("/routes", routesRouter);
router.use("/payments", paymentsRouter);
router.use("/bills", billsRouter);
router.use('/members', membersRouter);
router.use('/premises', premisesRouter);
router.use('/users', UsersRouter);

export default router;