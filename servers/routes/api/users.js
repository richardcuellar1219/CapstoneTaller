const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { createToken } = require("../../helpers/utils");
const { getAll, create, getByEmail } = require("../../models/user.model");

router.get("/", async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    //console.log(req.body);
    const [result] = await create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/login", async (req, res) => {
  // ¿Existe el email en la BD?
  const [users] = await getByEmail(req.body.email);
  if (users.length === 0) {
    return res.json({ fatal: "Error usuario y/o contraseña" });
  }

  // Recupero user
  const user = users[0];
  //console.log(users[0]);
  // ¿Coinciden las password?
  const iguales = bcrypt.compareSync(req.body.password, user.password);
  if (!iguales) {
    return res.json({ fatal: "Error usuario y/o contraseña" });
  }

  res.json({
    success: "Login correcto",
    token: createToken(user),
  });
});

module.exports = router;
