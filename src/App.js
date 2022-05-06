import Menunavbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Carrousel from "./components/Carrousel/Carrousel";
import {products} from "./data/Products/Products";
import Item from "./components/Item/Item";

function App() {
  const taskProducts = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(products)
    }, 2000)
  })

  taskProducts.then((res) => {
    console.log("The promise has run successfully")
  }).catch((err) => {
    console.log(("An error ocurred running the promise"))
  })
  return (
    <>
      <Menunavbar />
      <Carrousel />
      <ItemListContainer />
    </>
  );
}

export default App;
