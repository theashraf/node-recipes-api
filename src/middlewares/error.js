/* eslint-disable no-unused-vars */

const notFoundErrorHandler = (req, res, next) => {
	const error = new Error("Not Found")
	error.status = 400
	next(error)
}

const errorHandler = (err, req, res, next) => {
	res.status(err.status || 500).json({ error: err.message })
}

const error = app => {
	app.use(notFoundErrorHandler)
	app.use(errorHandler)
}

export default error
