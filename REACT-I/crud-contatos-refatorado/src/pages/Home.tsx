import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonHome } from "../components/styled/ButtonHome";
import { ContainerFlex } from "../components/styled/ContainerFlex";
import { Title } from "../components/styled/Title";
import { DefaultLayout } from "../config/layout/DefaultLayout";

export function Home() {
	const navigate = useNavigate();

	// CICLO DE VIDA didComponentUnmount(quando desmonta) => quando o componente some da DOM
	useEffect(() => {
		return logicaDeDesmontagem;
	}, []);

	function logicaDeDesmontagem() {
		console.log("DESMONTOU A HOME");
	}

	return (
		<DefaultLayout>
			<ContainerFlex>
				<Title>Bem-vindo 🚀</Title>

				<ButtonHome
					onClick={() => {
						/* essa nevagação depende de alguma lógica? SIM */
						const isConfirmed = confirm("Tem certeza?");

						if (isConfirmed) {
							navigate("/contacts");
						}
					}}
				>
					Visualizar Contatos
				</ButtonHome>
			</ContainerFlex>
		</DefaultLayout>
	);
}
