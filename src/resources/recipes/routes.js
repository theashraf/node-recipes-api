import Router from "express-promise-router"
import {
	createRecipe,
	readRecipe,
	readRecipes,
	updateRecipe,
	deleteRecipe
} from "./controllers"

const router = Router()

router
	.route("/")
	.post(createRecipe)
	.get(readRecipes)

router
	.route("/:id")
	.get(readRecipe)
	.post(updateRecipe)
	.delete(deleteRecipe)

export default router
