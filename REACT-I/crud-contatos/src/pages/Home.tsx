import { Fragment } from "react/jsx-runtime";
import { ButtonHome } from "../components/styled/ButtonHome";
import { ContainerFlex } from "../components/styled/ContainerFlex";
import { Title } from "../components/styled/Title";

export function Home() {
	return (
		<Fragment>
			<ContainerFlex>
				<Title>Bem-vindo 🚀</Title>

				<ButtonHome onClick={() => {}}>Visualizar Contatos</ButtonHome>
			</ContainerFlex>
		</Fragment>
	);
}
