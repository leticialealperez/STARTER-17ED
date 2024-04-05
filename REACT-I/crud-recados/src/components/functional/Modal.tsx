import { Fragment } from 'react/jsx-runtime';
import { Recado } from '../../pages/Home';
import { ButtonClose } from '../styled/Modal/ButtonClose';
import { Modal as ModalStyled } from '../styled/Modal/Modal';
import { ModalBody } from '../styled/Modal/ModalBody';
import { ModalButton } from '../styled/Modal/ModalButton';
import { ModalContent } from '../styled/Modal/ModalContent';
import { ModalDialog } from '../styled/Modal/ModalDialog';
import { ModalFooter } from '../styled/Modal/ModalFooter';
import { ModalHeader } from '../styled/Modal/ModalHeader';
import { ModalTitle } from '../styled/Modal/ModalTitle';

interface ModalProps {
    titulo: string;
    children?: React.ReactNode;
    textoBotaoConfirmar: string;


    /* estados e setEstados compartilhados pela Home */
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setDados: React.Dispatch<React.SetStateAction<Recado[]>>;
    idExcluir: string;
}

export function Modal(props: ModalProps) {

    function removerDado() {
        props.setDados((currentValue) => {
            const novaLista = currentValue.filter((recado) => recado.id !== props.idExcluir)
            return novaLista
        })
        fechaModal()
    }

    function fechaModal() {
         props.setOpen(false)
    }

    return (
        <ModalStyled style={{display: props.open ? 'block': 'none'}}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>{props.titulo}</ModalTitle>
                        <ButtonClose type="button" onClick={fechaModal}></ButtonClose>
                    </ModalHeader>
                    <ModalBody>
                        {props.children ?? <Fragment />}
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton type="button" onClick={fechaModal}>Cancelar</ModalButton>
                        <ModalButton type="button" onClick={removerDado}>{props.textoBotaoConfirmar}</ModalButton>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </ModalStyled>
    )
}