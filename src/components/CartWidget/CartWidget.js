import React from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


export default function CartWidget() {
    const { cart } = React.useContext(CartContext) 

    const getTotalQuantity = (items) => items
    .map((item) => item.quantity)
    .reduce((acc, value) => acc + value, 0)  
    const cantidad = getTotalQuantity(cart);  

    return (
            <div>{(cantidad === 0) ? <div style={{display: "none"}}></div> :
            
                <div className='cart-logo'>
                    <Link to="/cart">
                        <AiOutlineShoppingCart />  
                    </Link>
                    <span className="cart-badge">
                        {cantidad}
                    </span>
                </div>                
            }
            </div>
    );
  }