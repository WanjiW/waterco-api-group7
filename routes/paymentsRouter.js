import express from "express";
import { capturePayment, viewPaymentsByPremise, viewAllPayments } from "../controllers/paymentsController.js";

const paymentsRouter = express.Router();

// capture a bill
paymentsRouter.put("/:id", capturePayment);

// view specific payment based on its premise
paymentsRouter.get("/:id", viewPaymentsByPremise);

// view all bills
paymentsRouter.get("/", viewAllPayments);

export default paymentsRouter;

