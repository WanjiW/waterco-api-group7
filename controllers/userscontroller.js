import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Users  from "../models/users.model.js";


 dotenv.config()
 
//Sign-UP Add a USER
export async function AddUser(req,res){
try{
    bcrypt.hash(req.body.password,10).then(async(hash)=>{
        let userobj={
            email_address:req.body.email_address,
            password:hash,
            full_name:req.body.full_name
        }
        let User=await Users.create(userobj);
    if (User){
        res.status(200).json({
            message:"User Created successfully",
            success:true,
            data:User
        })
    }else{
        res.status(200).json({
            message:"User could not be created Successfully",
            Sucess:true
        })
    }
         
    });
    
}catch(err){
    console.log(err)
    res.status(500).json({
        success:false,
        message:"OOPS!Something is wroong"
    })
    
}

}
//View  A user
export async function ViewUser(req,res){
    try{
        let allUsers=await Users.findAll({where:{User_id:req.params.id}});
        if (allUsers){
           res.status(200).json({
               success:true,
               message:"Users received successfully",
                data:allUsers
           })}else{
                res.json({
                   success:true,
                  message:"Users could not be created"
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
//View All Users


 export async function ViewAllUsers(req,res){
     try{
         let allUsers=await Users.findAll();
         if (allUsers){
             res.status(200).json({
                 success:true,
                 message:"Users  received successfully",
                 data:allUsers
             })}else{
                 res.json({
                     success:true,
                     message:"Users could not be created"
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
export async function signIn(req, res) {
    //Get a user with the email address
    //Ensure that their password is correct
    //Create a JWT for them. (For Authenticating Other API Requests)
    try {
        let user = await Users.findOne({ where: { email_address: req.body.email_address } })
        if (!user) {
            return res.status(401).json({
                status: false,
                message: "Authentication Failed: User with email address not found."
            })
        }
        bcrypt.compare(req.body.password, user.password).then(response => {
            if (!response) {
                return res.status(401).json({
                    status: false,
                    message: "Authentication Failed: Incorrect password."
                })
            }
            let authToken = jwt.sign({ email_address: user.email_address, User_id: user.User_id },
                process.env.AUTH_KEY, { expiresIn: "1h" });
            return res.status(200).json({
                status: true,
                message: "User authentication successful",
                user: { full_name: user.full_name, email_address: user.email_address, user_id: user.User_id },
                token: authToken,
                expiresIn: 3600
            })
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}