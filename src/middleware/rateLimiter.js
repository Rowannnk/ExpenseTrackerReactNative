import ratelimit from "../config/upStash.js";

const rateLimiter = async (req, res, next) => {
  try {
    //userid and ip address as key
    const { success } = await ratelimit.limit("my-rate-limit");

    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests,please try again later." });
    }

    next();
  } catch (error) {
    console.log("Rate Limit Error", error);
    next(error);
  }
};

export default rateLimiter;
