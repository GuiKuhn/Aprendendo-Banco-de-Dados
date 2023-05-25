import controllers from "../controllers/controllers"
import express from "express"

const router = express.Router()

router.get('/', controllers.getId)

router.post('/', controllers.postUser)

router.delete('/', controllers.deleteId)

router.put('/', controllers.updateId)

export default router