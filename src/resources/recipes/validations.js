import Joi from "joi"

export const createRecipe = Joi.object().keys({
	name: Joi.string()
		.alphanum()
		.trim()
		.min(2)
		.max(255)
		.required()
})

export const updateRecipe = Joi.object().keys({})
