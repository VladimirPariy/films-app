import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import { Container } from "components/ui/container/container";
import { FormWrapper } from "components/ui/form-wrapper/form-wrapper";
import { Title } from "components/ui/title-container/title";
import { Input } from "components/ui/input/input";
import { SubmitBtn } from "components/ui/submit-btn/submit-btn";
import { Form } from "components/ui/form/form";

const Registration: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password, login, email);
  };
  return (
    <Container condition={true}>
      <FormWrapper>
        <Title>Sign up</Title>
        <Form submitHandler={submitHandler}>
          <Input
            inputID={"email_field"}
            inputType={"text"}
            labelText={"Email address"}
            value={email}
            changeHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            inputID={"userName_field"}
            inputType={"text"}
            labelText={"Login"}
            value={login}
            changeHandler={(e: ChangeEvent<HTMLInputElement>) => {
              setLogin(e.target.value);
            }}
          />
          <Input
            inputID={"password"}
            inputType={"password"}
            labelText={"Password"}
            value={password}
            changeHandler={(e) => setPassword(e.target.value)}
          />
          <SubmitBtn btnText={"Sign up"} />
        </Form>
      </FormWrapper>
    </Container>
  );
};

export { Registration };
