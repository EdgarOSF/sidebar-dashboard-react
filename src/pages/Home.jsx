import { Col, Container, Row } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="4" className="bg-primary">
            Col 1
          </Col>
          <Col xs="4" className="bg-danger">
            Col 2
          </Col>
          <Col xs="4" className="bg-warning">
            Col 3
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
