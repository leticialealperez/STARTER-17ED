import { NextFunction, Request, Response } from 'express';

export class CreateStudentMiddleware {
    public static validate(req: Request, res: Response, next: NextFunction) {
        const { name, age, document, email, password } = req.body;

        if(!name || typeof name !== 'string') {
            return res.status(400).json({
                ok: false,
                message: "Nome é obrigatório."
            });
        }

        if(age && typeof age !== 'number') {
            return res.status(400).json({
                ok: false,
                message: "Idade deve ser um valor numérico"
            });
        }

        if(age && age < 18) {
            return res.status(400).json({
                ok: false,
                message: "Não é possível cadastrar um aluno menor de 18 anos"
            });
        }

        if(!document || typeof document !== 'string') {
            return res.status(400).json({
                ok: false,
                message: "CPF é obrigatório."
            });
        }

        if(!email || typeof email !== 'string' || !email.includes("@")) {
            return res.status(400).json({
                ok: false,
                message: "Informe um e-mail válido"
            });
        }


        if(!password || typeof password !== 'string' || password.length < 6) {
            return res.status(400).json({
                ok: false,
                message: "Informe uma senha com no mínimo 6 caracteres"
            });
        }


        return next();
    }
}