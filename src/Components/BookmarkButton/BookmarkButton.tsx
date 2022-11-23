import React, {FC, MouseEvent, ReactNode} from "react";

interface Props {
	className: string | undefined;
	bookmarkClickHandler: (e: MouseEvent) => void;
	children: ReactNode;
}

const BookmarkButton: FC<Props> = (props) => {
	return (
		<button onClick={(e) => props.bookmarkClickHandler(e)}
						className={props.className}>
			{props.children}
		</button>
	);
};

export default BookmarkButton;