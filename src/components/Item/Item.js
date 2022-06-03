import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Button, CardGroup } from 'react-bootstrap';

const Item = ({product}) => {
const navegar = useNavigate();

  return (
    <CardGroup>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} alt={product.title} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button variant="warning"style={{ width: '98%', margin: '10px'}} onClick={()=>navegar(`/detalle/${product.id}`)}>Ver Más</Button>
      </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Item