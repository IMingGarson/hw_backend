import * as http from "http";
import App from "./app";
require("dotenv/config");

const PORT = process.env.PORT || 3000;
App.set("port", PORT);

const server = http.createServer(App);
server.listen(PORT);

server.on("listening", function(): void {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${PORT}`;
    console.info(`Listening on ${bind}`);
});

module.exports = App;