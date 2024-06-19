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
            });
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async list(req: Request, res: Response) {
       try {
            let { limit, page } = req.query;

            let limitDefault = 10;
            let pageDefault = 1;

            if (limit) {
                limitDefault = Number(limit);
            }

            if(page) {
                pageDefault = Number(page);
            }
          
            const students = await prismaConnection.student.findMany({
                skip: limitDefault * (pageDefault - 1),
                take: limitDefault,
                orderBy: {
                    createdAt: 'desc'
                },
                where: {
                    deleted: false
                },
                include: { address: true }
            });

            const count = await prismaConnection.student.count({
                where: {
                    deleted: false
                }
            });

            return res.status(200).json({
                ok: true,
                message: "Alunos listados com sucesso",
                students: students,
                pagination: {
                    limit: limitDefault,
                    page: pageDefault,
                    count: count,
                    totalPages: Math.ceil(count / limitDefault)
                }
            })
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async get(req: Request, res: Response) {
        try {
            const { studenId } = req.params;

            const studentFound = await prismaConnection.student.findUnique({
                where: {
                    id: studenId,
                    deleted: false
                },
                include: {
                    address: {
                       select: {
                            street: true,
                            addressNumber: true
                       },
                    }, 
                },
            });

            if(!studentFound) {
                return res.status(404).json({
                    ok: false,
                    message: "O aluno não existe na base de dados"
                })
            }

            return res.status(200).json({
                ok: true,
                message: "Aluno encontrado",
                student: studentFound
            })
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async update(req: Request, res: Response) {
        try {
            const { studenId } = req.params;
            const { name, age } = req.body;

            const studentUpdated = await prismaConnection.student.update({
                where: {
                    id: studenId,
                    deleted: false
                },
                data: {
                    name: name,
                    age: age
                }
            });
            
            return res.status(200).json({
                ok: true,
                message: "Aluno atualizado",
                studentUpdated
            })
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }

    public static async delete(req: Request, res: Response) {
        try {
           const { studenId } = req.params;

           const studentDeleted = await prismaConnection.student.update({
            where: { id: studenId, deleted: false },
            data: { deleted: true, deletedAt: new Date() },
           });

           return res.status(200).json({
                ok: true,
                message: "Aluno deletado com sucesso",
                studentDeleted
           })
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }
}