import Router from "express-promise-router"
import {
	createUser,
	readUser,
	readUsers,
	updateUser,
	deleteUser
} from "./controllers"

const router = Router()

router
	.route("/")
	.post(createUser)
	.get(readUsers)

router
	.route("/:id")
	.get(readUser)
	.post(updateUser)
	.delete(deleteUser)

export default router
