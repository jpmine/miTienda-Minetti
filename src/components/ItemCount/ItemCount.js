import React from "react";

export default function ItemCount ({stock}){
    const [textAdd, setText] = React.useState("Agregar")
    const [count, setCount] = React.useState(0)
    const handleRest = ()=>{
        if(count > 0 ){
            setCount(count -1)
            setText("Agregar")
        }
    }
    const handleAdd = ()=>{
        if(count < stock){
            setCount(count + 1)
            setText("Agregar")
        }
    }   

    return(
        <div class="row justify-content-center">
            <input type="Button" className="btn btn-secondary" value="-" onClick={handleRest} />            
            <span className="badge bg-light text-dark fs-5">{count}</span>
            <input type="Button" className="btn btn-secondary" value="+" onClick={handleAdd} />            
            <input type="Button" className="btn btn-outline-primary" value={textAdd} onClick={()=>setText("Agregado")}/>
        </div>
    );
}