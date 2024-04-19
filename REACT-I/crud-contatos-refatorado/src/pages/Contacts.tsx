import { useEffect, useRef, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { v4 as randomUUID } from "uuid";
import { Modal } from "../components/functional/Modal";
import { Notification } from "../components/functional/Notification";
import { ActionButton } from "../components/styled/ActionButton";
import { Container } from "../components/styled/Container";
import { Divider } from "../components/styled/Divider";
import { FloatButton } from "../components/styled/FloatButton";
import { Input } from "../components/styled/Input";
import { Table } from "../components/styled/Table";
import { Title } from "../components/styled/Title";

export interface Contact {
	id: string;
	name: string;
	phone: string;
	email: string;
}

export function Contacts() {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false);
	const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false);
	const [contactSelected, setContactSelected] = useState<Contact>({
		id: "",
		name: "",
		email: "",
		phone: "",
	});

	const inputName = useRef<HTMLInputElement>(null);
	const inputPhone = useRef<HTMLInputElement>(null);
	const inputEmail = useRef<HTMLInputElement>(null);
	const notificationRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const storageData = localStorage.getItem("contacts");

		if (storageData) {
			setContacts(JSON.parse(storageData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	function confirmCreate() {
		if (!inputName.current?.validity.valid) {
			inputName.current?.focus();
			return;
		}

		if (!inputPhone.current?.validity.valid) {
			inputPhone.current?.focus();
			return;
		}

		if (!inputEmail.current?.validity.valid) {
			inputEmail.current?.focus();
			return;
		}

		const newContact: Contact = {
			id: randomUUID(),
			name: inputName.current.value,
			email: inputEmail.current.value,
			phone: inputPhone.current.value,
		};

		setContacts((current) => [newContact, ...current]);
		clearFields();
		closeModal("create");
		showNotification();
	}

	function closeModal(mode: "create" | "update") {
		if (mode === "create") {
			setModalCreateIsOpen(false);
		} else {
			setModalUpdateIsOpen(false);
		}
	}

	function openModal(mode: "create" | "update") {
		if (mode === "create") {
			setModalCreateIsOpen(true);
		} else {
			setModalUpdateIsOpen(true);
		}
	}

	function clearFields() {
		inputName.current!.value = "";
		inputPhone.current!.value = "";
		inputEmail.current!.value = "";
	}

	function handleDelete(contact: Contact) {
		const isConfirmed = confirm(
			`Tem certeza que deseja excluir o contato do(a) ${contact.name}?`,
		);

		if (isConfirmed) {
			setContacts(contacts.filter((c) => c.id !== contact.id));
		}
	}

	function handleUpdate(contact: Contact) {
		openModal("update");
		setContactSelected(contact);
	}

	function confirmUpdate() {
		const indexFound = contacts.findIndex((c) => c.id === contactSelected.id);

		setContacts((currentList) => {
			currentList[indexFound] = {
				id: contactSelected.id,
				name: inputName.current!.value,
				phone: inputPhone.current!.value,
				email: inputEmail.current!.value,
			};

			return currentList;
		});

		closeModal("update");
		showNotification();
	}

	function showNotification() {
		notificationRef.current!.setAttribute("style", "display: block");

		setTimeout(() => {
			notificationRef.current!.removeAttribute("style");
		}, 2000);
	}

	return (
		<Fragment>
			<Container>
				<Title>Contatos</Title>
				<Divider />

				<Table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>Telefone</th>
							<th>E-mail</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact) => (
							<tr key={contact.id}>
								<td>{contact.name}</td>
								<td>{contact.phone}</td>
								<td>{contact.email}</td>
								<td>
									<ActionButton onClick={() => handleDelete(contact)}>
										Excluir
									</ActionButton>
									<ActionButton onClick={() => handleUpdate(contact)}>
										Atualizar
									</ActionButton>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>

			<FloatButton onClick={() => openModal("create")}>+</FloatButton>

			<Modal
				title='Novo Contato'
				textButtonConfirm='Cadastrar'
				actionConfirm={confirmCreate}
				isOpen={modalCreateIsOpen}
				actionClose={() => closeModal("create")}
			>
				<Input
					ref={inputName}
					type='text'
					name='name'
					placeholder='Nome Completo'
					required
				/>
				<Input
					ref={inputPhone}
					type='tel'
					name='phone'
					placeholder='Telefone'
					required
					minLength={10}
					maxLength={11}
				/>
				<Input ref={inputEmail} type='email' name='email' placeholder='E-mail' required />
			</Modal>

			<Modal
				title='Atualizar Contato'
				textButtonConfirm='Atualizar'
				actionClose={() => closeModal("update")}
				isOpen={modalUpdateIsOpen}
				actionConfirm={confirmUpdate}
			>
				<Input
					ref={inputName}
					type='text'
					name='name'
					placeholder='Nome Completo'
					defaultValue={contactSelected.name}
				/>
				<Input
					ref={inputPhone}
					type='tel'
					name='phone'
					placeholder='Telefone'
					defaultValue={contactSelected.phone}
				/>
				<Input
					ref={inputEmail}
					type='email'
					name='email'
					placeholder='E-mail'
					defaultValue={contactSelected.email}
				/>
			</Modal>

			<Notification ref={notificationRef} icon='✅' text='Contato salvo com sucesso' />
		</Fragment>
	);
}
