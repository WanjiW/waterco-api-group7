import express from "express";
import { AddUser,ViewAllUsers,ViewUser,signIn } from "../controllers/usersController.js";
import { authenticate } from "../middlewares/auth.js";
const UsersRouter=express.Router();

// Add A user-Sign up
UsersRouter.post ('/', authenticate,AddUser)

//Add a user-Sign in
UsersRouter.post('/signin',signIn)
//View A user users/:id
UsersRouter.get ('/:id',authenticate,ViewUser)
//View All users 
UsersRouter.get ('/',authenticate,ViewAllUsers)
export default UsersRouter;


