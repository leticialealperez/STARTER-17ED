import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { prismaRepository } from './prisma.repository';

const app = express();
app.use(express.json());
app.use(cors());

// definição das rotas
app.post('/produtos', async (request, response) => {
    const dados = request.body;

    if(!dados.descricao) {
        return response.status(400).json({
            message: "Descrição é obrigatório"
        });
    }

    if(!dados.valorCusto) {
        return response.status(400).json({
            message: "Valor custo é obrigatório"
        });
    }

    const produtoCadastrado = await prismaRepository.produto.create({
        data: {
            descricao: dados.descricao,
            valorCusto: dados.valorCusto,
            categoriaId: 1,
            quantidadeEstoque: 0
        }
    });

    return response.status(201).json({
        message: 'Produto cadastrado com sucesso',
        data: produtoCadastrado
    })
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} 🚀`)
});
