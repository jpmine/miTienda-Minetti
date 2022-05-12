import React from "react";
import { Card, Button } from "react-bootstrap";

const ItemGuitar = ({guitar}) => {
    return(            
                
            <div class="row align-items-center">
            <div class="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img class="card-imgs" variant="top" src={guitar.thumbnail} />
                <Card.Body>
                    <Card.Title>{guitar.title}</Card.Title>
                    <Card.Text>
                    {guitar.title}
                    <hr></hr>
                    <p>Precio: ${guitar.price}</p>
                    <p>Ubicación vendedor:
                        <ul>
                            <li>Provincia: {guitar.address.state_name}</li>
                            <li>Ciudad: {guitar.address.city_name}</li>
                        </ul>
                    </p>
                    </Card.Text>
                </Card.Body> 
                </Card>
            </div>
        </div>
    );
}

export default ItemGuitar