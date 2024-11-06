import { Application } from "express"
import { testRoute } from "./test_route"

export const routes = (app: Application) => {
    testRoute(app)
}