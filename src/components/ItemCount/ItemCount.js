import React from "react"
import { Button } from "react-bootstrap"
/* --------------- Declaracion de nuestro functional component -------------- */
export default function AddButton({count, setCount, stock, onSubmit}) {

  
  /* -------------------- Funcion para aumentar la cantidad ------------------- */
  const onAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  /* ------------------- Funcion para disminuir la cantidad ------------------- */
  const onDecrease = () => {
    if(count > 1) {
      setCount(count - 1)
    }
  }
  
  /* ------------------------- Componente presentacion ------------------------ */
  const StockButton = ({ handleOnClick, text }) => {
    return <Button className="btn-success stock-button" onClick={() => handleOnClick()}>{text}</Button>;
  };
  /* ------------------------- Componente presentacion ------------------------ */
  const AddButton = ({handleOnSubmit}) => {
    return <Button className="btn btn-warning" onClick={() => handleOnSubmit()}>Añadir al carrito</Button>;
  };

  return (
    <div className="add-button-container">
      <StockButton text="-" handleOnClick={onDecrease}/>      
      <span className="add-button-count">{count}</span>
      <StockButton text="+" handleOnClick={onAdd}/> <br /><br />    
      <AddButton handleOnSubmit={onSubmit} />
      <hr />
    </div>
  );
}