import { Router } from "express"
import { getAll } from "./../controllers/servers1"
//const { getAll } = require ("../controllers/servers1")
const router = Router()

router.get('/api/server', getAll)

export default router