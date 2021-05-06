import Premises from "../models/premises.model.js";
import  Customers from "../models/members.model.js"

export async function Addpremise(req,res){
    try{
        let Premise=await Premises.create(req.body);
        if (Premise){
            res.status(200).json({
                message:"Premise Created successfully",
                success:true,
                data:Premise
            })
        }else{
            res.status(200).json({
                message:" Premise could not be created Successfully",
                Sucess:true
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            success:false,
            message:"OOPS!Something is wroong"
        })
        
    }
    
    }


export async function Viewpremise(req,res){
    try{
        let  premise= await Premises.findAll({where:{PremiseId:req.params.id}})
        if(premise){
            res.status(200).json({
                message:"Premise Viewed",
                success:true,
                data:premise
            })}else{
                res.status(200).json({
                    message:"Premise cannot be  Viewed",
                    success:true
                    
            })
    }}catch(err){
        if(err){
            res.status(500).json({
                success:false,
                message:"OOPs.....Bad energy"
            })
        }
    }
     
}


    
export async function ViewAllpremises(req,res){
    try{
        let  premise= await Premises.findAll()
        if(premise){
            res.status(200).json({
                message:"Premise Viewed",
                success:true,
                data:premise
            })}else{
                res.status(200).json({
                    message:"Premise cannot be  Viewed",
                    success:true
                    
            })
    }}catch(err){
        if(err){
            res.status(500).json({
                success:false,
                message:"OOPs.....Bad energy"
            })
        }
    }
     
}
     

export async function Updatepremise(req,res){
    try{
        let updatemember = await Premises.update(req.body, {where: {PremiseId: req.params.id}})
        if (updatemember){
            res.json({ 
                success: true,
                message: "Feature has been changed",
                data: updatemember
            })
        } else{
            res.json({
                success: true,
                message: "Member was not deleted"
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
 

export async function deletepremise(req,res){
    try{
        let themember = await Premises.destroy({where: {PremiseId: req.params.id}});
        if (themember){
            res.json({
                success: true,
                message: "Member has been deleted",
                data: themember
            })
        } else{
            res.json({
                success: true,
                message: "Member was not deleted"
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

//View member Premises
export async  function ViewMemberpremise(req,res){
    try{
        let Memberpremise= await Customers.findAll({where:{PremiseId:req.params.id}})
        if (Memberpremise){
            res.status(200).json({
                success:true,
                message:"premise viewed Successfully"
            })
            }else{
                res.status(200).json({
                    success:true,
                    message:"premise cannot be viewed by this time"
                })
            }

        }
    catch(err){
        if (err){
            res.status(400).json({
                success:false,
                message:"Oops.....something is wrong"
            })
        }
    }
}     
