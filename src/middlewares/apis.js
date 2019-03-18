import { users, recipes } from "../resources"

const apis = app => {
	app.use("/api/users", users)
	app.use("/api/recipes", recipes)
}

export default apis
