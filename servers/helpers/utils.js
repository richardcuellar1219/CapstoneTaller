const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  const obj = {
    user_id: user.idusuario,
    user_role: user.role,
    user_name: user.username,
    exp: dayjs().add(5, "days").unix(),
  };

  return jwt.sign(obj, "en un lugar de la mancha");
};

module.exports = {
  createToken,
};
