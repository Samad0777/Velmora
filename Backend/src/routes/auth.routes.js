import express from "express";
import AuthController from "../controllers/auth.controller.js";
import AuthValidator from "../validators/auth.validate.js";
import verifyUser from "../middlewares/verifyUser.middleware.js";

const router = express.Router();

router.post(
  "/register",
  AuthValidator.registerValidator,
  AuthValidator.validateRequest,
  AuthController.register,
);

router.post(
  "/login",
  AuthValidator.loginValidator,
  AuthValidator.validateRequest,
  AuthController.login,
);

router.get("/get-me", verifyUser, AuthController.getMe);
router.post("/logout", AuthController.logout);

export default router;
