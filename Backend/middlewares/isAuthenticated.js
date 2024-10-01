import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  // console.log("Authentication called");
  // console.log("Cookies recieved", req.cookies);
  try {
    const token = req.cookies.token;
    console.log("Token recieved", token);

    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    console.log("decoded token", decode);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default isAuthenticated;
