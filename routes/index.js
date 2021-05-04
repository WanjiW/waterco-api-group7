import express from "express";
import routesRouter from "./routesRouter.js";

const router = express.Router();

router.use("/routes", routesRouter);

export default router;