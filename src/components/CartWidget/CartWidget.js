export default function CartWidget({count}) {
    return (
            <div className='cart-logo'>
                <img src="img/carticon.png" alt="Carrito de compras"/>
                {count}
            </div>
    );
  }