

export default function CartWidget({count}) {
    return (
            <div className='cart-logo'>
                <img src="img/carticon.png" alt="Carrito de compras"/>
                <p>{count}</p>
            </div>
    );
  }