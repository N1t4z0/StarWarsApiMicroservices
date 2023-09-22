const server = require("./src/server");
const {Characters} = require("./src/database/index");



server.listen(8004, () => {
  console.log("database Services listening on port 8004");
});

