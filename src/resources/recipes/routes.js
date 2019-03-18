import { Router } from "express"

const router = Router()

/**
 * @swagger
 * /api/recipes:
 *    get:
 *      description: This should return all recipes
 */
router.route("/").get((req, res, next) => {
	res.json({ data: [] })
})

export default router
