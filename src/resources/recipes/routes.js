import { Router } from "express"

const router = Router()

router.route("/").get((req, res, next) => {
	res.json({ data: [] })
})

export default router
