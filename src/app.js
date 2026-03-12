require("dotenv").config(); //Con que esto se ejecute una vez ya se cargan las variables

const Server = require("./config/server");

const server = new Server();

server.listen();
