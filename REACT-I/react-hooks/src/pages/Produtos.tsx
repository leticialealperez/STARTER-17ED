import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { v4 as generateUuid } from 'uuid';
import { Button } from '../components/styled/Button';
import { ContainerFlex } from '../components/styled/Container';
import { Input } from '../components/styled/Input';
import { Title } from '../components/styled/Title';

// TAREFA: criar cadastro, listagem e exclusão de produtos
// Um produto deve possuir ID, NOME e PREÇO
// O preço mostrado na página deve ser formatado para moeda Brazuca

interface Produto {
    id: string;
    nome: string;
    preco: number;
}

export function Produtos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    function cadastrarProduto(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const novoProduto: Produto = { 
            id: generateUuid(), 
            nome: event.currentTarget['nome'].value, 
            preco: Number(event.currentTarget['preco'].value) 
        };

        setProdutos((currentValue) => [novoProduto, ...currentValue]);
        event.currentTarget.reset();
    }

    function removerProduto(idProduto: string) {
        setProdutos((currentValue) =>  currentValue.filter((produto) => produto.id !== idProduto))
    }

    return (
        <Fragment>
            <ContainerFlex>
                <Title>Produtos</Title>
                
                <form onSubmit={cadastrarProduto}>
                    <Input type="text" name="nome" id='nome' placeholder='Nome' required />

                    <Input type="number" name="preco" id='preco' placeholder='Preço' required step={0.01} />
                    
                    <Button type='submit'>Adicionar</Button>
                </form>

                <ul>
                    {produtos.map((produto) => (
                        <li key={produto.id} onClick={() => removerProduto(produto.id)}>
                            {produto.nome} - {produto.preco.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}
                        </li>
                    ))}
                </ul>  
            </ContainerFlex>
        </Fragment>
    )
}