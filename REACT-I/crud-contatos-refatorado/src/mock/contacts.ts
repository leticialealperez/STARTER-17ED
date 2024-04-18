import { v4 as randomUUID } from "uuid";
import { Contact } from "../pages/Contacts";

export const contactsMock: Contact[] = [
	{
		id: randomUUID(),
		name: "João da Silva",
		phone: "51999887766",
		email: "joao@teste.com",
	},
	{
		id: randomUUID(),
		name: "Maria da Silva",
		phone: "51999887755",
		email: "maria@teste.com",
	},
	{
		id: randomUUID(),
		name: "Pedro da Silva",
		phone: "51999887744",
		email: "pedro@teste.com",
	},
];
