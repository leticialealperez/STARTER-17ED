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
    const [nome, setNome] = useState<string>("");

    function cadastrarAluno() {
        if(nome.length < 3) {
            alert("Precisa ter no minimo 3 caracteres!");
            return
        }

        const novoAluno: Aluno = { id: generateUuid(), nome: nome, dataLancamento: new Date() };

        setAlunos((currentValue) => [novoAluno, ...currentValue]);

        setNome("");
    }

    function removerAluno(idAluno: string) {
        setAlunos((currentValue) =>  {
            const novaLista = currentValue.filter((aluno) => aluno.id !== idAluno)
            return novaLista
        })
    }

    return (
        <Fragment>
            <ContainerFlex>
                <Title>Lista de Presença</Title>
                
                <Input type="text" name="nome-pessoa" id='nome-pessoa' value={nome} onChange={(ev) => setNome(ev.target.value)} placeholder='Nome Aluno'/>
                
                <Button onClick={() => cadastrarAluno()}>Adicionar</Button>

                <ul>
                    {alunos.map((aluno) => (
                        <li key={aluno.id} onClick={() => removerAluno(aluno.id)}>
                            {aluno.nome} - {aluno.dataLancamento.toLocaleDateString('pt-BR', { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                        </li>
                    ))}
                </ul>  
            </ContainerFlex>
        </Fragment>
    )
}