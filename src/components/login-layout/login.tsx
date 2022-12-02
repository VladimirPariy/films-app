import React, { FC, FormEvent, useState } from "react";

import { Container } from "components/ui/container/container";
import { FormWrapper } from "components/ui/form-wrapper/form-wrapper";
import { Title } from "components/ui/title-container/title";
import { Input } from "components/ui/input/input";
import { SubmitBtn } from "components/ui/submit-btn/submit-btn";
import { Form } from "components/ui/form/form";

const Login: FC = () => {
  const [loginField, setLoginField] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password, loginField);
  };

  return (
    <Container condition={true}>
      <FormWrapper>
        <Title>Sign in</Title>
        <Form submitHandler={submitHandler}>
          <Input
            inputID={"login_field"}
            inputType={"text"}
            labelText={"Login or email address"}
            value={loginField}
            changeHandler={(e) => setLoginField(e.target.value)}
          />
          <Input
            inputID={"password_field"}
            inputType={"password"}
            labelText={"Password"}
            value={password}
            changeHandler={(e) => setPassword(e.target.value)}
          />
          <SubmitBtn btnText={"Sign in"} />
        </Form>
      </FormWrapper>
    </Container>
  );
};

export { Login };
