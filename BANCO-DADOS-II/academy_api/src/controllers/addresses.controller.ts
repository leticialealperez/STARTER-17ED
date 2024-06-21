import { Request, Response } from 'express';

export class AddressesController {
    public static async create(req: Request, res: Response) {
        try {
            const { street, addressNumber, zipCode, complement, neighborhood, city, uf, student } = req.body;

            console.log(student);

            return res.status(200).json({
                ok: true,
                message: "Endereço cadastrado"
            })
            
        } catch(err) {
            return res.status(500).json({
                ok: false,
                message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${(err as Error).message}`
            });
        }
    }
}