// the functions for our functions
import Bill from "../models/billsModel.js";

//capture reading (add bill)
export async function captureReading (req, res){
    try{
        let reading = await Bill.create(req.body);
        if(reading){
            res.status(200).json ({ // if route is created successfully
                success: true,
                message: "Bill captured & saved successfully",
                data: reading
            })
        }else {
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

//view a bill
export async function viewBill (req, res){
    try{
        let bill = await Bill.findAll({where: {PaymentID: req.params.id}});
        if (bill){
            res.json({
                success: true,
                message: "Bill retrieved successfully",
                data: bill
            })
        } else{
            res.json({
                success: true,
                message: "Bill not found"
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


// view all bills
export async function viewAllBills (req, res){
    try{
        let allbills = await Bill.findAll();
        if (allbills){
            res.json({
                success: true,
                message: "Bill list retrieved successfully",
                data: allbills
            })
        } else{
            res.json({
                success: true,
                message: "Bill list not found"
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

