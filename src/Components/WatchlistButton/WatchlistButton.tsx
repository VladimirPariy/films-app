import React, {FC, MouseEvent, ReactNode} from "react";

interface Props {
	className: string | undefined;
	clickHandler: (e: MouseEvent, ID: number) => void;
	children: ReactNode;
	ID: number;
}

const WatchlistButton: FC<Props> = (props) => {
	return (
		<button onClick={(e) => props.clickHandler(e, props.ID)}
						className={props.className}>
			{props.children}
		</button>
	);
};

export default WatchlistButton;