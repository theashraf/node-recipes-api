import Router from "express-promise-router"
import { validateBody } from "../../middlewares/validation"
import { createRecipe as createRecipeValidation } from "./validations"
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
	.post(validateBody(createRecipeValidation), createRecipe)
	.get(readRecipes)

router
	.route("/:id")
	.get(readRecipe)
	.post(updateRecipe)
	.delete(deleteRecipe)

export default router
