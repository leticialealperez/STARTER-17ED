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
