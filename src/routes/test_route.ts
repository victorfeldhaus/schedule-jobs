import { Application } from "express";
import { testController } from "../controllers/test_controller";

export const testRoute = (app: Application) => {
    app.post("/hello", 
        testController
    )
}