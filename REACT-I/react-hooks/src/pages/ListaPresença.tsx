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

interface Aluno {
    id: string;
    nome: string;
    dataLancamento: Date;
}

export function ListaPresenca() {
    const [alunos, setAlunos] = useState<Aluno[]>([]);

    function cadastrarAluno() {
        const input = document.getElementById('nome-pessoa') as HTMLInputElement;

        if(input.value.length < 3) {
            alert("Precisa ter no minimo 3 caracteres!");
            return
        }

        const novoAluno: Aluno = { id: generateUuid(), nome: input.value, dataLancamento: new Date() };

        setAlunos((currentValue) => [novoAluno, ...currentValue]);

        input.value = "";
    }

    function removerAluno(idAluno: string) {
        console.log(idAluno)

        setAlunos((currentValue) =>  {
            const novaLista = currentValue.filter((aluno) => aluno.id !== idAluno)
            return novaLista
        })
    }

    return (
        <Fragment>
            <ContainerFlex>
                <Title>Lista de Presença</Title>
                
                <Input type="text" name="nome-pessoa" id='nome-pessoa' />
                
                <Button onClick={() => cadastrarAluno()}>Adicionar</Button>

                <ul>
                    {alunos.map((aluno) => (
                        <li key={aluno.id} onClick={() => removerAluno(aluno.id)}>{aluno.nome} - {aluno.dataLancamento.toLocaleDateString('pt-BR', { hour: "2-digit", minute: "2-digit", second: "2-digit" })}</li>
                    ))}
                </ul>  
            </ContainerFlex>
        </Fragment>
    )
}