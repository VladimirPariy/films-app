import React, {FC, MouseEvent, ReactNode} from "react";

interface Props {
	className: string | undefined;
	bookmarkClickHandler: (e: MouseEvent, ID: number) => void;
	children: ReactNode;
	ID: number;
}

const WatchlistButton: FC<Props> = (props) => {
	return (
		<button onClick={(e) => props.bookmarkClickHandler(e, props.ID)}
						className={props.className}>
			{props.children}
		</button>
	);
};

export default WatchlistButton;