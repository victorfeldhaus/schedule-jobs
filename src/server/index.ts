import express from "express";

const app = express();
const port = 3333;

export const server = () => {
    

    app.listen(port, () =>  console.log("server is running..."))
}