import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Item ({product}){
    const [textAdd, setText] = React.useState("Agregar")
    const [count, setCount] = React.useState(0)
    const handleRest = ()=>{
        if(count > 0 ){
            setCount(count -1)
            setText("Agregar")
        }
    }

    const stockTelecaster = 10;
    const handleAdd = ()=>{
        if(count < stockTelecaster){
            setCount(count + 1)
            setText("Agregar")
        }
    }

    return(
        <div class="row align-items-center">
            <div class="col">
                <Card style={{ width: '18rem' }}>
                <Card.Img class="card-imgs" variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <div class="row justify-content-center">
                        <input type="button" class="btn btn-success" value="-" onClick={handleRest} />            
                        <span class="badge bg-warning text-dark fs-5">{count}</span>
                        <input type="button" class="btn btn-success" value="+" onClick={handleAdd} />            
                    <input type="button" class="btn btn-outline-warning" value={textAdd} onClick={()=>setText("Agregado")}/>
                    </div>
                </Card.Body> 
                </Card>
            </div>
        </div>
    );
}