import Form from 'react-bootstrap/Form';
import { Button, Container, Row } from 'react-bootstrap';

function OrderForm() {
  return (
    <Container fluid="md" className="orderForm">
        <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control type="text" placeholder="Ingresá tu nombre completo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTel">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="phone" placeholder="Tu teléfono móvil" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAdress">
            <Form.Label>Tu dirección</Form.Label>
            <Form.Control type="text" placeholder="Calle y número" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>Localidad</Form.Label>
            <Form.Control type="text" placeholder="Ingresá la ciudad" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicProv">
            <Form.Label>Provincia</Form.Label>
            <Form.Control type="text" placeholder="Ingresá la provincia" />
        </Form.Group>

        <Button variant="warning" type="submit">
            Finalizar
        </Button>
        </Form>
        </Row>
    </Container>    
  );
}

export default OrderForm;