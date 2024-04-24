import { forwardRef } from "react";
import { NotificationWrapper } from "../styled/NotificationWrapper";

interface NotificationProps {
	text: string;
	icon: React.ReactNode;
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>((props, ref) => {
	return (
		<NotificationWrapper ref={ref}>
			<p>
				{props.text}
				{props.icon}
			</p>
		</NotificationWrapper>
	);
});

interface TesteProps {}

export const Teste = forwardRef<HTMLHeadingElement, TesteProps>((_, ref) => {
	return <h1 ref={ref}>Hello</h1>;
});

// function Teste2() {
// 	return <h1>Teste 2</h1>;
// }

// interface Teste3Props {
// 	value: number;
// }

// const Teste3 = (props: Teste3Props) => {
// 	return <h1>Teste 2 {props.value}</h1>;
// };
