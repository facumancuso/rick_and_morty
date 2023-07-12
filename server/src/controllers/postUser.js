const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send("Faltan datos");

  try {
    const usuario = await User.findOrCreate({ where: { email, password } });

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postUser;
