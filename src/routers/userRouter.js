import express from "express";
import { see, edit, deleteUser, logout } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/edit-profile", edit);
userRouter.get("/delete", deleteUser);
userRouter.get("/logout", logout);

export default userRouter;

// 6. users/:id  (see users)
// 7. users/edit-profile
// 8. users/delete
// 9. users/logout
