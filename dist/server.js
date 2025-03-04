"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const users = [
    { id: 1, name: "Kendrick", isOld: false },
    { id: 2, name: "John", isOld: true },
    { id: 3, name: "Doe", isOld: false }
];
const server = http_1.default.createServer((request, response) => {
    const { url, method } = request;
    //home route
    if (request.url === '/' && request.method === 'GET') {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1> Home </h1>");
        return;
    }
    //About route
    if (request.url === "/about" && request.method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1> About </h1>");
        return;
    }
    //My Accout route
    if (request.url === "/my-account" && request.method === "GET") {
        response.writeHead(403, { "Content-Type": "text/plain" });
        response.end("You have no access to this page");
        return;
    }
    //any other route
    if (request.url && request.method === "GET") {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Page not found");
        return;
    }
});
const PORT = process.env.BACKEND_PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
