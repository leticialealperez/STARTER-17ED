import { Student } from '@prisma/client';
import { Request, Response } from 'express';
import { prismaConnection } from '../database/prisma.connection';

export class AssessmentsController {
    public static async create(req: Request, res: Response){
        try {
            const { student, title, rate, deadline } = req.body;
            
            // considera-se que as validações dos dados de avaliação foram realizadas

            const assessmentCreated = await prismaConnection.assessment.create({
                data: {
                    deadline: new Date(deadline),
                    rate: rate ?? 0,
                    title,
                    studentId: (student as Student).id
                },
            })

            return res.status(201).json({
                ok: true,
                message: `Avaliação cadastrada com sucesso para o aluno ${(student as Student).name}`,
                assessmentCreated
            });


        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }
}