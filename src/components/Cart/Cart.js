import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ListGroup, Badge, Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";


export default function Cart() {
    const { cart, deleteAll, removeFromCart } = useContext(CartContext)
    const volver = useNavigate()

    const getTotalPrice = (items) => items
    .map((item) => item.price*item.quantity)
    .reduce((acc, value) => acc + value, 0)  
    const total = getTotalPrice(cart);  

    const listItems = cart.map((element) => {
            const subtotal = element.price * element.quantity
            return (
                <>
                <ListGroup as="ul">
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{element.title}</div>
                        Precio {element.price}<br />
                        <h6>Subtotal: {subtotal}</h6>
                        <Badge bg="success" pill className="card-shadow">
                            Cantidad: {element.quantity}                    
                        </Badge>
                        <br />
                        <br />
                        <div>
                            <button className='btn btn-warning card-shadow' onClick={()=> removeFromCart(element.id)}><BsFillTrashFill /></button>                            
                        </div>
                    </div>
                    
                    <div className="ms-3 me-auto cartImg card-shadow align-self-end">
                        <img src={element.image} alt={element.title} />
                    </div>
                </ListGroup.Item> 
                </ListGroup>  
                </>       
            )
        }
    )

    if (total !== 0) {
        return (
            <>
            <div className="col-lg-12 col-md-12 col-sm-12">
                {listItems}
                <Card body className="display-4">Total: ${total}</Card>

                <Container>
                <Row>
                    <Col>
                        <div className="d-grid gap-2">
                        <button className='btn btn-warning card-shadow' onClick={deleteAll}>Vaciar carrito</button>
                        </div> 
                    </Col>
                    <Col>
                        <div className="d-grid gap-2">       
                        <button className='btn btn-success card-shadow' onClick={() =>volver('/Finalizar')}>Terminar compra</button>
                        </div>
                    </Col>
                
                <Col>
                    <div className="d-grid gap-2">       
                    <button className='btn btn-warning card-shadow' onClick={() =>volver('/productos')}>Volver a Productos</button>
                    </div> 
                </Col>   
                </Row>
                </Container>   
                </div>  
                <br />  
            </>
        )
    }else {
        return (
        <>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <Card body className="display-4 text-center">No hay productos en el carrito</Card>
        </div> 
        <div className="d-grid gap-2"> 
            <button className='btn btn-warning' onClick={() =>volver('/productos')}>Volver a Productos</button>
        </div>
        <br />
        </>
        )        
    }
}