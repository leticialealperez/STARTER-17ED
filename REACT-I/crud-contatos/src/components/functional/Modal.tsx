import { Fragment } from "react/jsx-runtime";
import { ButtonClose } from "../styled/Modal/ButtonClose";
import { Modal as ModalStyled } from "../styled/Modal/Modal";
import { ModalBody } from "../styled/Modal/ModalBody";
import { ModalButton } from "../styled/Modal/ModalButton";
import { ModalContent } from "../styled/Modal/ModalContent";
import { ModalDialog } from "../styled/Modal/ModalDialog";
import { ModalFooter } from "../styled/Modal/ModalFooter";
import { ModalHeader } from "../styled/Modal/ModalHeader";
import { ModalTitle } from "../styled/Modal/ModalTitle";

interface ModalProps {
	title: string;
	children?: React.ReactNode;
	textButtonConfirm: string;
	actionConfirm: () => void;
	isOpen: boolean;
	actionClose: () => void;
}

export function Modal(props: ModalProps) {
	return (
		<Fragment>
			{props.isOpen && (
				<ModalStyled>
					<ModalDialog>
						<ModalContent>
							<ModalHeader>
								<ModalTitle>{props.title}</ModalTitle>
								<ButtonClose
									type='button'
									onClick={props.actionClose}
								></ButtonClose>
							</ModalHeader>
							<ModalBody>{props.children ?? <Fragment />}</ModalBody>
							<ModalFooter>
								<ModalButton
									type='button'
									mode='cancel'
									onClick={props.actionClose}
								>
									Cancelar
								</ModalButton>
								<ModalButton
									type='button'
									mode='confirm'
									onClick={props.actionConfirm}
								>
									{props.textButtonConfirm}
								</ModalButton>
							</ModalFooter>
						</ModalContent>
					</ModalDialog>
				</ModalStyled>
			)}
		</Fragment>
	);
}
