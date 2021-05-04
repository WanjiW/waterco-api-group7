import express from "express";
import { capturePayment, viewPaymentsByPremise, viewAllPayments } from "../controllers/paymentsController.js";

const paymentsRouter = express.Router();

// capture a bill
billsRouter.put("/", capturePayment);

// view specific payment based on its premise
billsRouter.get("/:id", viewPaymentsByPremise);

// view all bills
billsRouter.get("/", viewAllPayments);

export default paymentsRouter;

