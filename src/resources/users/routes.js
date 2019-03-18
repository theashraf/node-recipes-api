import { Router } from "express"

const router = Router()

/**
 * @swagger
 * /api/users:
 *    get:
 *      description: This should return all users
 */
router.route("/").get((req, res, next) => {
	res.json({ data: [] })
})

export default router
