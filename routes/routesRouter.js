import express from "express";
import { addRoute, viewRoute, viewAllRoutes, updateRoute } from "../controllers/routesController.js";

const routesRouter = express.Router();

//create a route
routesRouter.post("/", addRoute);

//view a route
routesRouter.get("/:id", viewRoute);

// view routes
routesRouter.get("/", viewAllRoutes);

// update/edit route
routesRouter.put("/:id", updateRoute);

// // view premises on a route
// routesRouter.get("/", );

export default routesRouter;

