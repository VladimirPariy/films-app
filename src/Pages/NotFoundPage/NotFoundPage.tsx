import React, {FC} from "react";
import Container from "../../Components/UI/Container/Container";

const NotFoundPage: FC = () => {
	return (
		<Container condition={true}>
			<div style={{fontSize: '30px'}}>
				Page not found (404)
			</div>
		</Container>
	
	);
};

export default NotFoundPage;