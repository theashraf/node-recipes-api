import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import path from "path"

const options = {
	swaggerDefinition: {
		info: {}
	},
	apis: [path.join(__dirname, "../resources/**/routes.js")]
}

const swagger = app => {
	app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)))
}

export default swagger
