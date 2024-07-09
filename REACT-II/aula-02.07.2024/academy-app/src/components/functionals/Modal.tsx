import { Modal as ModalStyled } from "../styled/Modal/Modal";
import { ModalBody } from "../styled/Modal/ModalBody";
import { ModalButton } from "../styled/Modal/ModalButton";
import { ModalContent } from "../styled/Modal/ModalContent";
import { ModalDialog } from "../styled/Modal/ModalDialog";
import { ModalFooter } from "../styled/Modal/ModalFooter";
import { ModalHeader } from "../styled/Modal/ModalHeader";
import { ModalTitle } from "../styled/Modal/ModalTitle";


interface ModalProps {
    titulo: string;
    children?: React.ReactNode;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({titulo,children, open, setOpen}: ModalProps){
    function fechaModal(){
        setOpen(false)  
    }

    return(
        <ModalStyled style={{ display: open ? "block" : "none" }}>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>{titulo}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>  
                    <ModalFooter>
                        <ModalButton type="button" onClick={fechaModal}>Sair</ModalButton>
                    </ModalFooter>                  
                </ModalContent>
            </ModalDialog>
        </ModalStyled>
    )
}