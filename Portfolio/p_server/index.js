const config = require("./config");
const { server } = require("./src/App");

const port = config.port || 4040;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
