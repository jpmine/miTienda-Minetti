import React from "react";
import { CartContext } from "../../Context/CartContext";


export default function CartWidget() {
    const { cart } = React.useContext(CartContext) 
    return (
            <div className='cart-logo'>
                <img src="./img/carticon.png" alt="Carrito" />
                <span className="cart-badge">
                    {cart.length}
                </span>
            </div>
    );
  }