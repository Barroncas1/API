const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UserController = require("../controllers/UsersController")
const UsersAvatarController = require("../controllers/UsersAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const usersController = new UserController()
const usersAvatarController = new UsersAvatarController()

userRoutes.post("/", usersController.create);
userRoutes.put("/", ensureAuthenticated, usersController.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update)

module.exports = userRoutes