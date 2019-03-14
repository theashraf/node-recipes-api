import helmet from "helmet"
import cors from "cors"

const security = app => {
	app.use(helmet())
	app.use(cors())
}

export default security
