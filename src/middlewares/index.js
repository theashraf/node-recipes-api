import bodyParser from "./bodyParser"
import logger from "./logger"
import security from "./security"
import apis from "./apis"
import error from "./error"
import swagger from "./swagger"

const applyMiddlewares = app => {
	bodyParser(app)
	logger(app)
	security(app)
	swagger(app)
	apis(app)
	error(app)
}

export default applyMiddlewares
