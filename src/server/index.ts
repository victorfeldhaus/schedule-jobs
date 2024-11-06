import express from "express";
import { routes } from "../routes";

const app = express();
const port = 3333;

export const server = () => {
    
    routes(app)

    app.listen(port, () =>  console.log("server is running..."))
}