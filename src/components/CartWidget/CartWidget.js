import React from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartWidget() {
    const { cart } = React.useContext(CartContext) 

    const getTotalQuantity = (items) => items
    .map((item) => item.quantity)
    .reduce((acc, value) => acc + value, 0)  
    const cantidad = getTotalQuantity(cart);  

    return (
            <div>{(cantidad == 0) ? <div style={{display: "none"}}></div> :
                <div className='cart-logo'>
                    <img src="/img/carticon.png" alt="Carrito" />
                    <span className="cart-badge">
                        {cantidad}
                    </span>
                </div>}
            </div>
    );
  }