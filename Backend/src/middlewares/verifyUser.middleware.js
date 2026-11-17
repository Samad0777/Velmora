import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  const token = req.cookies?.accessToken;
  if (!token) {
    return res.status(401).json({ message: "Authentication required." });
  }

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    console.error("Authentication failed: JWT_SECRET is not set.");
    return res.status(500).json({ message: "Internal server error." });
  }

  let payload;
  try {
    payload = jwt.verify(token, jwtSecret);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid or expired token." });
    }
    return next(error);
  }

  if (
    !payload ||
    typeof payload !== "object" ||
    typeof payload.sub !== "string"
  ) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }

  req.user = { id: payload.sub };
  return next();
};

export default verifyUser;