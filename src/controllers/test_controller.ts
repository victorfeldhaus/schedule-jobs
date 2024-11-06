import { Request, Response } from "express";

export const testController = async (req: Request, res: Response) => {
    const { name } = req.body;

    console.log(name);

    res.status(200).send({message: `Hello ${name}!`})
}