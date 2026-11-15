import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("username")
    .isString()
    .withMessage("Username must be a string.")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Username is required."),
  body("email")
    .isString()
    .withMessage("Email must be a string.")
    .bail()
    .trim()
    .isEmail()
    .withMessage("A valid email address is required."),
  body("password")
    .isString()
    .withMessage("Password must be a string.")
    .bail()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long."),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Request validation failed.",
      errors: errors
        .array()
        .map(({ path, msg }) => ({ field: path, message: msg })),
    });
  }

  return next();
};

export default { registerValidator, validateRequest };
