import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import { DefaultLayout } from "../config/layout/DefaultLayout";

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

	const closeModalCached = useCallback((mode: "create" | "update") => {
		if (mode === "create") {
			setModalCreateIsOpen(false);
		} else {
			setModalUpdateIsOpen(false);
		}
	}, []);

	const clearFieldsCached = useCallback(() => {
		inputName.current!.value = "";
		inputPhone.current!.value = "";
		inputEmail.current!.value = "";
	}, []);

	const showNotificationCached = useCallback(() => {
		notificationRef.current!.setAttribute("style", "display: block");

		setTimeout(() => {
			notificationRef.current!.removeAttribute("style");
		}, 2000);
	}, []);

	const confirmCreateCached = useCallback(() => {
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
		clearFieldsCached();
		closeModalCached("create");
		showNotificationCached();
	}, [closeModalCached, clearFieldsCached, showNotificationCached]);

	const openModalCached = useCallback((mode: "create" | "update") => {
		if (mode === "create") {
			setModalCreateIsOpen(true);
		} else {
			setModalUpdateIsOpen(true);
		}
	}, []);

	const handleDeleteCached = useCallback((contact: Contact) => {
		const isConfirmed = confirm(
			`Tem certeza que deseja excluir o contato do(a) ${contact.name}?`,
		);

		if (isConfirmed) {
			setContacts((currentList) => currentList.filter((c) => c.id !== contact.id));
		}
	}, []);

	const handleUpdateCached = useCallback(
		(contact: Contact) => {
			openModalCached("update");
			setContactSelected(contact);
		},
		[openModalCached],
	);

	const confirmUpdateCached = useCallback(() => {
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

		closeModalCached("update");
		showNotificationCached();
	}, [closeModalCached, contactSelected.id, contacts, showNotificationCached]);

	const listaTRs = useMemo(() => {
		return contacts.map((contact) => (
			<tr key={contact.id}>
				<td>{contact.name}</td>
				<td>{contact.phone}</td>
				<td>{contact.email}</td>
				<td>
					<ActionButton onClick={() => handleDeleteCached(contact)}>Excluir</ActionButton>
					<ActionButton onClick={() => handleUpdateCached(contact)}>
						Atualizar
					</ActionButton>
				</td>
			</tr>
		));
	}, [contacts, handleDeleteCached, handleUpdateCached]);

	return (
		<DefaultLayout>
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
					<tbody>{listaTRs}</tbody>
				</Table>
			</Container>

			<FloatButton onClick={() => openModalCached("create")}>+</FloatButton>

			<Modal
				title='Novo Contato'
				textButtonConfirm='Cadastrar'
				actionConfirm={confirmCreateCached}
				isOpen={modalCreateIsOpen}
				actionClose={() => closeModalCached("create")}
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
				actionClose={() => closeModalCached("update")}
				isOpen={modalUpdateIsOpen}
				actionConfirm={confirmUpdateCached}
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
			{/* <Teste ref={}/> */}
		</DefaultLayout>
	);
}
