import Router from "express-promise-router"
import { validateBody } from "../../middlewares/validation"
import {
	createUser as createUserValidation,
	loginUser as loginUserValidation
} from "./validations"
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
	.post(validateBody(createUserValidation), createUser)
	.get(readUsers)

router.post("/login", validateBody(loginUserValidation), loginUser)

router
	.route("/:id")
	.get(readUser)
	.post(updateUser)
	.delete(deleteUser)

export default router
