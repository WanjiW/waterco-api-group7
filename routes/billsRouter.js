import express from "express";
import { captureReading, viewBill, viewAllBills } from "../controllers/billsController.js";

const billsRouter = express.Router();

// capture a reading/bill
billsRouter.post("/", captureReading);

// view specific bill
billsRouter.get("/:id", viewBill);

// view all bills
billsRouter.get("/", viewAllBills);

export default billsRouter;

