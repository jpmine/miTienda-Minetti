import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

const Item = ({product}) => {
const navegar = useNavigate();

  return (
    <Col xs={12} md={3} className="cards-container justify-content-md-center">
      <Card className="card-shadow" border="success" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="warning"style={{ width: '98%', margin: '10px'}} onClick={()=>navegar(`/detalle/${product.id}`)}>Ver Más</Button>
      </Card.Body>
      </Card>
      </Col>
  )
}

export default Item