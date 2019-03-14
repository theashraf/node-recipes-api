import { users, recipes } from "../resources"

const apis = app => {
	app.use("/api/v1/users", users)
	app.use("/api/v1/recipes", recipes)
}

export default apis
