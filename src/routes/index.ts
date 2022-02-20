import { Application, Response } from "express";
import * as api from "./api";

export const register = (app: Application) => {
    const oidc = app.locals.oidc;

    app.get("/", (req: any, res: Response) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        res.render("index", { isAuthenticated: req.isAuthenticated(), user });
    })

    app.get("/login", oidc.ensureAuthenticated(), (_req: any, res: Response) => {
        res.redirect("/guitars");
    });

    // define a route to handle logout
    app.get("/logout", (req: any, res: Response) => {
        req.logout(); // mmm TODO type not reconized
        res.redirect("/");
    });

    // define a secure route handler for the guitars page
    app.get("/guitars", oidc.ensureAuthenticated(), (req: any, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        res.render("guitars", { isAuthenticated: req.isAuthenticated(), user });
    });

    api.register( app );

}

