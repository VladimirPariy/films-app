import React, { FC } from "react";
import { Container } from "components/ui/container/container";

const NotFoundPage: FC = () => {
  return (
    <Container condition={true}>
      <div style={{ fontSize: "30px" }}>Page not found (404)</div>
    </Container>
  );
};

export default NotFoundPage;
