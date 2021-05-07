// the functions for our functions
import Route from "../models/routesModel.js";

// add a route
export async function addRoute (req, res){
    try{
        let route = await Route.create(req.body);
        if(route){
            res.status(200).json ({ // if route is created successfully
                success: true,
                message: "Route created successfully",
                data: route
            })
        }else {
            res.status(200).json({
                success: true,
                message: "Route could not be created"
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

export async function viewRoute(req, res){
    try{
        let specificroute = await Route.findAll({where: {RouteNumber: req.params.id}});
        if (specificroute){
            res.json({
                success: true,
                message: "Route info successfully",
                data: specificroute
            })
        } else{
            res.json({
                success: true,
                message: "route info not found"
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

// view all routes
export async function viewAllRoutes (req, res){
    try{
        let allroutes = await Route.findAll();
        if (allroutes){
            res.json({
                success: true,
                message: "Route list retrieved successfully",
                data: allroutes
            })
        } else{
            res.json({
                success: true,
                message: "Route list not found"
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

// edit/update route
export async function updateRoute (req, res){
    try{
        let updateroute = await Route.update(req.body, {where: {RouteNumber: req.params.id}})
        if (updateroute){
            res.json({ 
                success: true,
                message: "Route info updated",
                data: updateroute
            })
        } else{
            res.json({
                success: true,
                message: "Route was not updated"
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


//view premises on a routeq
