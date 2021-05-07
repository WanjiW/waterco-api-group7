// the functions for our functions
import Payment from "../models/paymentsModel.js";

//capture payment (same as capture reading, they all go under customer payments)
export async function capturePayment(req, res) {
    try {
        let reading = await Payment.create(req.body);
        if (reading) {
            res.status(200).json({ // if route is created successfully
                success: true,
                message: "Bill captured & saved successfully",
                data: reading
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Bill could not be captured"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}

//view payments by premise //use customerID - its the foreign key
export async function viewPaymentsByPremise(req, res) {
    try {
        let payment = await Payment.findAll({ where: { PremiseID: req.params.id } }); //use customer ID
        if (payment) {
            res.json({
                success: true,
                message: "Payments retrieved successfully",
                data: payment
            })
        } else {
            res.json({
                success: true,
                message: "Premise's payments not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}


// view all payments (paid bills)
export async function viewAllPayments(req, res) {
    try {
        let allPayments = await Payment.findAll({ where: { BillStatus: "Paid" } });
        if (allPayments) {
            res.json({
                success: true,
                message: "Payment list retrieved successfully",
                data: allPayments
            })
        } else {
            res.json({
                success: true,
                message: "Payment list not found"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Something is wrong"
        })
    }
}

