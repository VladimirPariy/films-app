import React, {FC, FormEvent, useState} from "react";

import Container from "../UI/Container/Container";
import FormWrapper from "../UI/FormWrapper/FormWrapper";
import Title from "../UI/TitleContainer/Title";
import Input from "../UI/Input/Input";
import SubmitBtn from "../UI/SubmitBtn/SubmitBtn";
import Form from "../UI/Form/Form";

const Registration: FC = () => {
	const [email, setEmail] = useState<string>('')
	const [login, setLogin] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(password, login, email)
		
	}
	return (
		<Container condition={true}>
			<FormWrapper>
				<Title>
					Sign up
				</Title>
				<Form submitHandler={submitHandler}>
					<Input inputID={"email_field"}
								 inputType={"text"}
								 labelText={"Email address"}
								 value={email}
								 changeHandler={e => setEmail(e.target.value)}/>
					<Input inputID={"userName_field"}
								 inputType={"text"}
								 labelText={"Login"}
								 value={login}
								 changeHandler={e => setLogin(e.target.value)}/>
					<Input inputID={"password"}
								 inputType={"password"}
								 labelText={"Password"}
								 value={password}
								 changeHandler={e => setPassword(e.target.value)}/>
					<SubmitBtn btnText={"Sign up"}/>
				</Form>
			</FormWrapper>
		</Container>
	);
};

export default Registration;