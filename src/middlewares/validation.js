import Joi from "joi"

export const validateBody = validationSchema => {
	return (req, res, next) => {
		const { error, value } = Joi.validate(req.body, validationSchema)
		if (error) {
			next(error)
			return
		}
		req.body = value
		next()
	}
}

export const validateParam = () => {}
