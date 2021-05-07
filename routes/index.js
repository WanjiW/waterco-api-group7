import express from "express";
import routesRouter from "./routesRouter.js";
import billsRouter from "./billsRouter.js";
import paymentsRouter from "./paymentsRouter.js";

const router = express.Router();

router.use("/routes", routesRouter);
router.use("/payments", paymentsRouter);
router.use("/bills", billsRouter);

export default router;