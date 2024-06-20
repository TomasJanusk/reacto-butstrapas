import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>Testas1</Card.Title>
              <Card.Text> React</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>Testas2</Card.Title>
              <Card.Text> React</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>Testas3</Card.Title>
              <Card.Text> React</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <Card.Body>
              <Card.Title>Testas4</Card.Title>
              <Card.Text> React</Card.Text>
            </Card.Body>
          </Card>
        </Col> 
      </Row>
    </Container>
  );
}
export default App;
