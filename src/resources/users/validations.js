import Joi from "joi"
import appConfig from "../../../config"

export const createUser = Joi.object().keys({
	email: Joi.string()
		.email()
		.required(),
	password: Joi.string()
		.regex(appConfig.passwordPolicy)
		.required(),
	firstName: Joi.string()
		.alphanum()
		.min(2)
		.max(3)
		.trim(),
	lastName: Joi.string()
		.alphanum()
		.min(2)
		.max(3)
		.trim()
})

export const loginUser = Joi.object().keys({
	email: Joi.string()
		.email()
		.required(),
	password: Joi.string().required()
})

export const updateUser = Joi.object().keys({
	firstName: Joi.string()
		.alphanum()
		.min(2)
		.max(3)
		.trim(),
	lastName: Joi.string()
		.alphanum()
		.min(2)
		.max(3)
		.trim()
})
