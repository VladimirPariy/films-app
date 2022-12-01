import React, {FC, FormEvent, useState} from "react";

import Container from "../UI/Container/Container";
import FormWrapper from "../UI/FormWrapper/FormWrapper";
import Title from "../UI/TitleContainer/Title";
import Input from "../UI/Input/Input";
import SubmitBtn from "../UI/SubmitBtn/SubmitBtn";
import Form from "../UI/Form/Form";

const Login: FC = () => {
	const [loginField, setLoginField] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	
	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(password, loginField)
	}
	
	return (
		<Container condition={true}>
			<FormWrapper>
				<Title>
					Sign in
				</Title>
				<Form submitHandler={submitHandler}>
					<Input inputID={"login_field"}
								 inputType={"text"}
								 labelText={"Login or email address"}
								 value={loginField}
								 changeHandler={e => setLoginField(e.target.value)}/>
					<Input inputID={"password_field"}
								 inputType={"password"}
								 labelText={"Password"}
								 value={password}
								 changeHandler={e => setPassword(e.target.value)}/>
					<SubmitBtn btnText={'Sign in'}/>
				</Form>
			</FormWrapper>
		</Container>
	);
};

export default Login;