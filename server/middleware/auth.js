import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // console.log(req);
    console.log(req.headers.authorization);
    // console.log(req.server);
    // console.log(req._parser);

    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
