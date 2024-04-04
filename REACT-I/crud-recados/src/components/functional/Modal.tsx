import { ButtonClose } from '../styled/Modal/ButtonClose';
import { Modal as ModalStyled } from '../styled/Modal/Modal';
import { ModalBody } from '../styled/Modal/ModalBody';
import { ModalButton } from '../styled/Modal/ModalButton';
import { ModalContent } from '../styled/Modal/ModalContent';
import { ModalDialog } from '../styled/Modal/ModalDialog';
import { ModalFooter } from '../styled/Modal/ModalFooter';
import { ModalHeader } from '../styled/Modal/ModalHeader';
import { ModalTitle } from '../styled/Modal/ModalTitle';

export function Modal() {
    return (
        <ModalStyled>
            <ModalDialog>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle>Modal title</ModalTitle>
                        <ButtonClose type="button" aria-label="Close"></ButtonClose>
                    </ModalHeader>
                    <ModalBody>
                        <p>Woo-hoo, you're reading this text in a modal!</p>
                    </ModalBody>
                    <ModalFooter>
                        <ModalButton type="button">Close</ModalButton>
                        <ModalButton type="button">Save changes</ModalButton>
                    </ModalFooter>
                </ModalContent>
            </ModalDialog>
        </ModalStyled>
    )
}