import React from "react";
import {
  Container,
  Button,
  ProgressBar,
  ListGroup,
  Alert,
  Spinner,
} from "react-bootstrap";

function App() {
  return (
    <Container>
      <div className="text-primary">안녕하세요</div>
      <Button>확인</Button>
      <ListGroup as="ul">
        <ListGroup.Item action active variant="primary" as="li">
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item variant="primary" as="li">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item variant="primary" as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item variant="primary" as="li" active>
          Porta ac consectetur ac
        </ListGroup.Item>
      </ListGroup>
      <ProgressBar variant="primary" now={60} label={`60%`} />
      <Alert>알림창입니다.</Alert>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
}

export default App;
