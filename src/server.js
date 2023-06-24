const app = require("./app");
const PORT = process.env.PORT || 8080;
const sequelize = require("./utils/connection");

const main = async () => {
  try {
    await sequelize.sync();
    console.log(`Data base conected💾`);
    app.listen(PORT);
    console.log(`Server running on Port:${PORT}🧙‍♂️`);
  } catch (error) {
    console.error(error);
  }
};

main();
