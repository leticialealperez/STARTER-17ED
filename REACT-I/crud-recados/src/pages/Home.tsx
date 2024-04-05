import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { v4 as generateUUID } from 'uuid';
import { Modal } from '../components/functional/Modal';
import { Button } from '../components/styled/Button';
import { ContainerFlex } from '../components/styled/Container';
import { Input } from '../components/styled/Input';
import { Title } from '../components/styled/Title';

export interface Recado {
    id: string;
    descricao: string;
    detalhamento: string;
}

export function Home() {
    const [recados, setRecados] = useState<Recado[]>([]);
    const [aberto, setAberto] = useState<boolean>(false);
    const [idExcluir, setIdExcluir] = useState<string>("");

    function cadastrar(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const novoRecado: Recado = {
            id: generateUUID(),
            descricao: event.currentTarget['descricao'].value,
            detalhamento: event.currentTarget['detalhamento'].value
        }

        setRecados([novoRecado, ...recados]);
        event.currentTarget.reset();
    }

    return (
        <Fragment>
            <ContainerFlex>
                <Title>Recados</Title>

                <form onSubmit={cadastrar}>
                    <Input type="text" name="descricao" required placeholder="Descrição" />
                    <Input type="text" name="detalhamento" required placeholder="Detalhamento" />

                    <Button type="submit">Cadastrar</Button>
                </form>


                <ul>
                    {recados.map((recado) => (
                        <li key={recado.id} onClick={() => {
                            setIdExcluir(recado.id)
                            setAberto(true)
                        }}>
                            <p>{recado.descricao}</p>
                            <p>{recado.detalhamento}</p>
                        </li>
                    ))}
                </ul>
                
            </ContainerFlex>
            
            <Modal 
                titulo='Excluir registro' 
                textoBotaoConfirmar='Excluir'
                open={aberto}
                setOpen={setAberto}
                setDados={setRecados}
                idExcluir={idExcluir}
            >
               <p>Deseja excluir definitivamente o registro?</p> 
            </Modal>
        </Fragment>
    )
}