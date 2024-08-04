import express from "express";
//do not forget to add .js extenstion at the end here.
//userController => userController.js
import {
  create,
  getAllUsers,
  getUserById,
  update,
  deleteUser,
} from "../controller/userController.js";

//create an express router instance
const route = express.Router();

//creating data into the database
route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", update);
route.delete("/delete/user/:id", deleteUser);

export default route;
//after creating the routes you have to import them in to index.js file
