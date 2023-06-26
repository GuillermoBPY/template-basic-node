const User = require("./../models/User");

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
