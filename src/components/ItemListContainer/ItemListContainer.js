import {promesa} from "../../data/Products/Products";
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function ItemListContainer() {
    const [loading, setLoading] = useState(false)
    const [listaProductos, setListaProductos]= useState([])
    const {tipocategoria} = useParams()

    useEffect(()=>{
        setLoading(true)
        promesa
        .then((res) => {
            if(!tipocategoria){
                setListaProductos(res)
            }
            else{
                setListaProductos(res.filter((product)=>product.category === tipocategoria))
            }
        }
        )
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [tipocategoria])
    
    return (
            <div>
                {loading ? <div className="spinnerLoad d-flex justify-content-center"> <Spinner animation="border" variant="warning" />Cargando</div> : <ItemList listaProductos={listaProductos}/>}
            </div>
        );
  }