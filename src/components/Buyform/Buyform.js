import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Container, Row } from 'react-bootstrap';
import { addDoc, collection, getFirestore, doc, runTransaction} from "firebase/firestore"
import { useState, useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { OrderReceived } from './OrderReceived';



export default function OrderForm() {

    const { cart } = useContext(CartContext)
    const [data, setData] = useState();
    const [orderId, setOrderId] = useState();
    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setData({...data, [name]: value});
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const order = {
            buyer: data,
            items: cart,
        }
        const db = getFirestore()
        const ordersCollection = collection(db, "orders")
        await addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id)
            updateProducts()
        })
    }

    const updateProducts = async () => {
        const db = getFirestore ()
        cart.forEach( async (item) => {
          const productRef = doc(db, `productos`, item.id)
          await runTransaction(db, async (transaction) => {
          const transfDoc = await transaction.get(productRef);
          if (!transfDoc.exists()) {
            console.error("El documento no existe")
          }
          const newStock = transfDoc.data().stock - item.quantity;
          transaction.update(productRef, { stock: newStock });
        });
        })
      }   

        return (
          <div>
           {orderId ?  
                <OrderReceived orderId={orderId} data={data} />
           : 
           <Container fluid="md" className="orderForm">
           <Row>
           <Form>
           <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Nombre y apellido</Form.Label>
               <Form.Control 
                   type="text"
                   name="name"
                   onChange={handleChange}
                   placeholder="Ingresá tu nombre completo" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control 
                   type="email"
                   name="email"
                   onChange={handleChange}
                   placeholder="Enter email" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicTel">
               <Form.Label>Teléfono</Form.Label>
               <Form.Control 
                   type="phone" 
                   name="phone"
                   onChange={handleChange}
                   placeholder="Tu teléfono móvil" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicAdress">
               <Form.Label>Tu dirección</Form.Label>
               <Form.Control 
                   type="text" 
                   name="address"
                   onChange={handleChange}
                   placeholder="Calle y número" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicCity">
               <Form.Label>Localidad</Form.Label>
               <Form.Control 
                   type="text" 
                   name="city"
                   onChange={handleChange}
                   placeholder="Ingresá la ciudad" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicProv">
               <Form.Label>Provincia</Form.Label>
               <Form.Control 
                   type="text" 
                   name="city"
                   onChange={handleChange}
                   placeholder="Ingresá la provincia" />
           </Form.Group>

           <Button variant="warning" 
               type="submit"
               onClick={handleSubmit}>
               Finalizar compra
           </Button>
           </Form>
           </Row>
        </Container>
       }
          </div>
        );
}