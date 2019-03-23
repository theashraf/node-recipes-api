import Recipe from "./Recipe"

export const createRecipe = async (req, res) => {
	const { body: recipeData } = req
	const recipe = await Recipe.create(recipeData)
	res.status(201).json(recipe)
}

export const readRecipe = async (req, res) => {
	const { id: recipeId } = req.params
	const recipe = await Recipe.findById(recipeId).exec()
	res.status(200).json(recipe)
}

export const readRecipes = async (req, res) => {
	const recipes = await Recipe.find({}).exec()
	res.status(200).json(recipes)
}

export const updateRecipe = async (req, res) => {
	const {
		params: { id: recipeId },
		body: recipeData
	} = req
	const updatedRecipe = await Recipe.findByIdAndUpdate(
		recipeId,
		{
			$set: recipeData
		},
		{ new: true }
	).exec()
	res.status(200).json(updatedRecipe)
}

export const deleteRecipe = async (req, res) => {
	const { id: recipeId } = req.params
	const deletedRecipe = await Recipe.findByIdAndRemove(recipeId)
	res.status(200).json(deletedRecipe)
}
