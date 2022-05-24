import React from 'react'

const CartContext = React.createContext()
const {Provider} = CartContext

const CartProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

  // addToCart
    const addToCart = (productDetail, count) => {
        if(isInCart(productDetail.id)) {
        const newCart = cart.map(cartItem => {
            if(cartItem.id === productDetail.id) {
            cartItem.quantity++
            }
            return cartItem
        })
        setCart(newCart)
        }
        else {
        setCart([...cart, {...productDetail, quantity: +count}])
        }
    }
    // removeFromCart
    const removeFromCart = (id) => {
        //Replicar logica de addToCart pero invertida 
        //y chequear la funcion a realizar cuando el quantity es 1
        
        //SI LA CANTIDAD ES IGUAL A 1 HACE ESTO
        const newCart = cart.filter((carItem) => carItem.id !== id);
        setCart(newCart)

        // SINO

    /*  const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
            cartItem.quantity--;
        }
        return cartItem;
        });
        setCart(newCart); */
        
    }
    // deleteAll
    const deleteAll = () => {
        setCart([])
    }
    // isInCart
    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }



  return (
      <Provider value={{
          addToCart,
          removeFromCart,
          deleteAll,
          isInCart,
          cart
      }}>{children}</Provider>
    
  )
}


export {CartContext, CartProvider}