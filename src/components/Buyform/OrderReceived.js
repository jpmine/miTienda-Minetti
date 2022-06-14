import "./order.css"
import React from 'react'
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const OrderReceived = ({orderId}, {data}) => {
    const { cart, deleteAll } = useContext(CartContext)
    const navegar = useNavigate();

    const getTotal = (items) => items
    .map((item) => item.price*item.quantity)
    .reduce((acc, value) => acc + value, 0)  
    
    const total = getTotal(cart); 

    const Continuar = () =>{
        deleteAll()
        navegar(`/`)
    }

    return (
    
    <div className='body-order'>
                <div class="card-order">
                <div class="title-order">Tu pedido fue aceptado</div>
                <div class="info-order">
                    <div class="row">
                        <div class="col-5 pull-right">
                            <span id="heading">Código de orden:</span><br /> 
                            <span id="details"><b>{orderId}</b></span>
                        </div>
                    </div>      
                </div>      
                <div class="pricing-order">
                    <div class="row">
                        <div class="col-9">
                            <span id="name">Envío</span>
                        </div>
                        <div class="col-3">
                            <span id="price">Gratis</span>
                        </div>
                    </div>
                </div>
                <div class="total-order">
                    <div class="row">
                        <div class="col-9"><big>Total de tu compra: ${total}</big></div>
                    </div>
                </div>
                <div class="progress-track-order">
                    <div class="title">Estado del pedido</div>
                </div>
                <div class="progress-track-order">
                    <ul id="progressbar">
                        <li class="step0 active " id="step1">Aceptado</li>
                        <li class="step0 text-center" id="step2">Enviado</li>
                        <li class="step0 text-right" id="step3">En camino</li>
                        <li class="step0 text-right" id="step4">Recibido</li>
                    </ul>
                </div>

                <div class="total-order">
                    <div class="row">
                    <Container>
                    <Row>
                        <Col>
                            <div className="d-grid gap-2">
                            <button className='btn btn-warning card-shadow' onClick={Continuar}>Continuar</button>
                            </div> 
                        </Col>
                    </Row>
                    </Container>
                    </div>
                </div>

                <div class="footer-order">
                    <div class="row">
                        <div class="col-2">
                            <img class="img-fluid" src="img/logo-labemol.png" alt="Tienda de guitarras" />
                        </div>
                        <div class="col-10">
                            Necesitás ayuda? Contactános
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}


