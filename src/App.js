import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import FetchContainer from "./components/FetchContainer/FetchContainer"
import Footer from "./components/Footer/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import {CartProvider} from './Context/CartContext'
import Cart from "./components/Cart/Cart";
import Buyform from "./components/Buyform/Buyform"

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/categoria/:tipocategoria' element={<ItemListContainer/>} />
        <Route path='/detalle/:productId' element={<ItemDetailContainer />} />
        <Route path='/fetch' element={<FetchContainer/>} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Finalizar' element={<Buyform />} />
      </Routes>
      <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;