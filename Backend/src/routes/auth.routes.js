import express from "express";
import AuthController from "../controllers/auth.controller.js";
import AuthValidator from "../validators/auth.validate.js";

const router = express.Router();

router.post(
  "/register",
  AuthValidator.registerValidator,
  AuthValidator.validateRequest,
  AuthController.register,
);

export default router;
