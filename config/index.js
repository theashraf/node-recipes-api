import { merge } from "lodash"
import defaultConfig from "./default"
import developmentConfig from "./development"
import productionConfig from "./production"

const env = process.env.NODE_ENV || "development"
let envConfig = developmentConfig

switch (env) {
	case "production":
		envConfig = productionConfig
		break
	default:
		break
}

const appConfig = merge(defaultConfig, envConfig)

export default appConfig
