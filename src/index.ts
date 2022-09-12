import * as http from "http";
import App from "./app";

const PORT = process.env.PROT || 3000;
App.set("port", PORT);

const server = http.createServer(App);
server.listen(PORT);

server.on("listening", function(): void {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${PORT}`;
    console.info(`Listening on ${bind}`, null);
});

module.exports = App;