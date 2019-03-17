import { createServer } from "http"
import mongoose from "mongoose"
import app from "./src/app"
import appConfig from "./config"

const server = createServer(app)

mongoose
	.connect(appConfig.MONGO_URI, { useNewUrlParser: true })
	.then(() => {
		server.listen(appConfig.PORT, () =>
			console.log(`server is running on port ${appConfig.PORT}`)
		)
	})
	.catch(e => console.error(e))
