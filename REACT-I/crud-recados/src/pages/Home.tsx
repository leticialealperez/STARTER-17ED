import { useEffect, useState } from 'react';
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

// Ciclo de vida de um componente - Quando?
// render -> nasceu na dom virtual
// componentDidMounth -> momento em que o componente montou na tela -> nasceu na dom real
// componentDidUnmounth -> momento em que o componente desmonta na tela -> morrer na dom real
// componentDidUpdated -> momento em que o componente re-renderiza -> atualização de estado ou props


export function Home() {
    const [recados, setRecados] = useState<Recado[]>([]);
    const [aberto, setAberto] = useState<boolean>(false);
    const [idExcluir, setIdExcluir] = useState<string>("");

    function executaSempre() {
        console.log("useEffect >>> executaSempre")
    }

    function executaApenasUmaVez() {
        console.log("useEffect >>> executa apenas uma vez")
    }

    // render
    useEffect(executaSempre);

    // componentDidMounth
    // undefined, null, "", 0, false, NAN          => falsy
    // {}, [], "a", true, qualquer numero !== 0    => truthy
    useEffect(executaApenasUmaVez, []); 




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