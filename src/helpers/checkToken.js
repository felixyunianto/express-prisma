const form = require("./form");
const jwt = require("jsonwebtoken");

module.exports = {
  checkLogin: (req, res, next) => {
    const bearerToken = req.header("x-access-token");

    if (!bearerToken) {
      form.formError(res, "Please login first");
    } else {
      const token = bearerToken.split(" ")[1];
      try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        req.decodedToken = decodedToken;
        next();
      }catch(error){
        form.formError(res, 'Invalid Token', 403);
      }
    }
  },
};
