import express from "express"
import { getuser,createuser,updateUser,deleteUser} from "../controllers/user.js"
const router = express.Router()

router.get("/users", getuser)
router.post("/users", createuser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)
export default router