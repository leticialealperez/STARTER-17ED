import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { v4 as randomUUID } from "uuid";
import { Modal } from "../components/functional/Modal";
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
	const [name, setName] = useState<string>("");
	const [phone, setPhone] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [modalCreateIsOpen, setModalCreateIsOpen] = useState<boolean>(false);
	const [modalUpdateIsOpen, setModalUpdateIsOpen] = useState<boolean>(false);
	const [contactSelected, setContactSelected] = useState<Contact>({
		id: "",
		name: "",
		email: "",
		phone: "",
	});

	// CICLO DE VIDA render(quando monta e quando atualiza) => sem dependencia
	// useEffect(() => {
	// 	console.log("SEM DEPENDENCIA");
	// });

	// CICLO DE VIDA didComponentMount - quando monta => array de dependencias vazio
	useEffect(() => {
		// vai no localstorage e busca uma key chamada "contacts"
		const storageData = localStorage.getItem("contacts");

		// se existir, utiliza do valor para setar o valor estado "contacts"
		if (storageData) {
			setContacts(JSON.parse(storageData));
		}
	}, []);

	// CICLO DE VIDA didComponentUpdate (quando atualiza o valor de um estado ou props) => array preenchido com aquilo que será observado (state ou props)
	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	function confirmCreate() {
		// validar preenchimento dos campos
		if (!name.length) {
			alert("É preciso preencher o nome");
			return;
		}

		if (phone.length < 10 || phone.length > 11) {
			alert("É preciso preencher um telefone válido, sem caracteres especiais");
			return;
		}

		if (!email.includes("@") || !email.includes(".com")) {
			alert("É preciso preencher um e-mail válido");
			return;
		}

		// criar o objeto do novo contato
		const newContact: Contact = {
			id: randomUUID(),
			name: name,
			email: email,
			phone: phone,
		};

		// adicionar na lista de contatos
		setContacts((current) => [newContact, ...current]);

		// limpar os campos
		clearFields();

		// fechar o modal de cadastro
		closeModal("create");
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
		setName("");
		setPhone("");
		setEmail("");
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

	function handleInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
		setContactSelected({
			...contactSelected,
			[ev.currentTarget.name]: ev.currentTarget.value, //email
		});
	}

	function confirmUpdate() {
		// preciso saber qual a posição do array será atualizada
		const indexFound = contacts.findIndex((c) => c.id === contactSelected.id);

		if (indexFound !== -1) {
			// Essa intrução é capaz de copiar apenas os valores do array "contacts" para dentro de "copy"
			// const copy = contacts; ❌ não recomendado
			const copy = [...contacts]; // ✅ recomendado

			// realizar a substituição do valor que está no indice
			copy[indexFound] = contactSelected;

			setContacts(copy);
		}

		closeModal("update");
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
					type='text'
					name='name'
					placeholder='Nome Completo'
					value={name}
					onChange={(ev) => setName(ev.currentTarget.value)}
				/>
				<Input
					type='tel'
					name='phone'
					placeholder='Telefone'
					value={phone}
					onChange={(ev) => setPhone(ev.currentTarget.value)}
				/>
				<Input
					type='email'
					name='email'
					placeholder='E-mail'
					value={email}
					onChange={(ev) => setEmail(ev.currentTarget.value)}
				/>
			</Modal>

			<Modal
				title='Atualizar Contato'
				textButtonConfirm='Atualizar'
				actionClose={() => closeModal("update")}
				isOpen={modalUpdateIsOpen}
				actionConfirm={confirmUpdate}
			>
				<Input
					type='text'
					name='name'
					placeholder='Nome Completo'
					value={contactSelected.name}
					onChange={handleInputChange}
				/>
				<Input
					type='tel'
					name='phone'
					placeholder='Telefone'
					value={contactSelected.phone}
					onChange={handleInputChange}
				/>
				<Input
					type='email'
					name='email'
					placeholder='E-mail'
					value={contactSelected.email}
					onChange={handleInputChange}
				/>
			</Modal>
		</Fragment>
	);
}
