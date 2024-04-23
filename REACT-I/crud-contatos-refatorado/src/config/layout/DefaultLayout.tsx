import { useContext } from "react";
import { Fragment } from "react/jsx-runtime";
import { Copyright } from "../../components/functional/Copyright";
import { ButtonToggleTheme } from "../../components/styled/ButtonToggleTheme";
import { Footer } from "../../components/styled/Footer";
import { Icon } from "../../components/styled/Icon";
import { Navbar } from "../../components/styled/Navbar";
import { ThemeContext } from "../contexts/ThemeContext";

interface DefaultLayoutProps {
	children: React.ReactNode;
}

export function DefaultLayout(props: DefaultLayoutProps) {
	const themeContext = useContext(ThemeContext);

	return (
		<Fragment>
			<header>
				<Navbar>
					<ButtonToggleTheme onClick={themeContext.changeTheme}>
						{themeContext.theme.name == "dark" ? (
							<Icon className='bi bi-sun-fill' />
						) : (
							<Icon className='bi bi-moon-stars' />
						)}
					</ButtonToggleTheme>
				</Navbar>
			</header>
			{props.children}
			<Footer>
				<Copyright />
			</Footer>
		</Fragment>
	);
}
