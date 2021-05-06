import Customers from "../models/members.model.js";
 
 

export async function Addmember(req,res){
try{
    let Customer=await Customers.create(req.body);
    if (Customer){
        res.status(200).json({
            message:"Member Created successfully",
            success:true,
            data:Customer
        })
    }else{
        res.status(200).json({
            message:"Member could not be created Successfully",
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

export async function ViewMember(req,res){
    try{
        let allMembers=await Customers.findAll({where:{CustomerId:req.params.id}});
        if (allMembers){
           res.status(200).json({
               success:true,
               message:"Members received successfully",
                data:allMembers
           })}else{
                res.json({
                   success:true,
                  message:"Members could not be created"
                }
               
               )
            }
    }catch(err){
       if (err){
            res.json({
               success:false,
              message:"Oops.....Something is wrong"
           })

        }

    }
    
}
 //export function ViewMember(req,res){
 //   const Member=Customers.some(customer=>customer.id===parseInt(req.params.id));

   // if (Member){
     //   res.status(200).json(yourboy.filter(customer=>customer.id===req.params.CustomerID))
   // }else{
    //    res.json({message:"No dey whine me o"})
   // }
//}


 export async function ViewAllmember(req,res){
     try{
         let allMembers=await Customers.findAll();
         if (allMembers){
             res.status(200).json({
                 success:true,
                 message:"Members received successfully",
                 data:allMembers
             })}else{
                 res.json({
                     success:true,
                     message:"Members could not be created"
                 }
                
                 )
             }
     }catch(err){
         if (err){
             res.json({
                 success:false,
                 message:"Oops.....Something is wrong"
             })

         }

     }
     
}

export async function UpdateMember(req,res){
    try{
        let updatemember = await Customers.update(req.body, {where: {CustomerID: req.params.id}})
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
     

export async function deletemember(req,res){
    try{
        let themember = await Customers.destroy({where: {CustomerID: req.params.id}});
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

 