import morgan from "morgan"

const logger = app => {
	if (process.env.NODE_ENV === "development") {
		app.use(morgan("dev"))
	}
}

export default logger
