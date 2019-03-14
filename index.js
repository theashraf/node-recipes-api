import { createServer } from "http"
import app from "./src/app"
import appConfig from "./config"

const server = createServer(app)

server.listen(appConfig.PORT, () =>
	console.log(`server is running on port ${appConfig.PORT}`)
)
