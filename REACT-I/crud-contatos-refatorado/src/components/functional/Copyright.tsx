import { CopyRightText } from "../styled/CopyrightText";
import { Link } from "../styled/Link";

export function Copyright() {
	return (
		<CopyRightText>
			<small>
				{"Copyright © "}
				<Link href='http://www.growdev.com.br' target='_blank' rel='noopener noreferrer'>
					Growdev
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</small>
		</CopyRightText>
	);
}
