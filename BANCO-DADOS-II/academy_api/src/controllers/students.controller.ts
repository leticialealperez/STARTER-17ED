import { Request, Response } from 'express';
import { prismaConnection } from '../database/prisma.connection';

export class StudentsController {
    public static async create(req: Request, res: Response) {
        try {
            const { name, age, document, email, password } = req.body;

            await prismaConnection.student.create({
                data: {
                    name,
                    age,
                    password,
                    documentIdentification: document,
                    emailAddress: email,
                }
            });


            return res.status(201).json({
                ok: true,
                message: 'Aluno cadastrado com sucesso!',
            })
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async list(req: Request, res: Response) {
       try {
        //    const students = await prismaConnection.student.findMany({
        //         where: { deleted: false }
        //     });
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async get(req: Request, res: Response) {
        try {
            // const studentFound = await prismaConnection.student.findUnique({ where: { id: req.params.id }});
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async update(req: Request, res: Response) {
        try {
            // const studentUpdated = await prismaConnection.student.update({ });
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static delete(req: Request, res: Response) {
        try {
            //..
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }
}