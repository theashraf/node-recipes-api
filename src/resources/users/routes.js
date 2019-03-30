import Router from "express-promise-router"
import {
	createUser,
	readUser,
	readUsers,
	updateUser,
	deleteUser,
	loginUser
} from "./controllers"

const router = Router()

router
	.route("/")
	.post(createUser)
	.get(readUsers)

router.post("/login", loginUser)

router
	.route("/:id")
	.get(readUser)
	.post(updateUser)
	.delete(deleteUser)

export default router
