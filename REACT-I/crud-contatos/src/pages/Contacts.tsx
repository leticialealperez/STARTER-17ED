import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { ActionButton } from "../components/styled/ActionButton";
import { Container } from "../components/styled/Container";
import { Divider } from "../components/styled/Divider";
import { FloatButton } from "../components/styled/FloatButton";
import { Table } from "../components/styled/Table";
import { Title } from "../components/styled/Title";
import { contactsMock } from "../mock/contacts";

export interface Contact {
	id: string;
	name: string;
	phone: string;
	email: string;
}

export function Contacts() {
	const [contacts, setContacts] = useState<Contact[]>(contactsMock);

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
									<ActionButton onClick={() => {}}>Excluir</ActionButton>
									<ActionButton onClick={() => {}}>Atualizar</ActionButton>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</Container>

			<FloatButton onClick={() => {}}>+</FloatButton>
		</Fragment>
	);
}
