const { Router } = require("express")

const UserController = require("../controllers/UsersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()

const usersController = new UserController()

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update)

module.exports = userRoutes