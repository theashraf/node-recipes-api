import { json } from "body-parser"

const bodyParser = app => {
	app.use(json())
}

export default bodyParser
