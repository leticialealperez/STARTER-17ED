import { NextFunction, Request, Response } from 'express';


export class LoginMiddleware {
    public static validate(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body;

        if (!email || typeof email !== 'string' || !email.includes("@")) {
            return res.status(400).json({
                ok: false,
                message: "Informe um e-mail válido"
            });
        }

        if(!password || typeof password !== 'string') {
            return res.status(400).json({
                ok: false,
                message: "Informe uma senha no formato conjunto de caracteres"
            });
        }

        return next();
    }
}