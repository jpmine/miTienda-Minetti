// import {promesa} from "../../data/Products/Products";
import ItemList from "../ItemList/ItemList"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { getFirestore, getDocs , collection, query, where } from "firebase/firestore"

export default function ItemListContainer() {
    const [loading, setLoading] = useState(false)
    const [listaProductos, setListaProductos]= useState([])
    const {tipocategoria} = useParams()

    React.useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        if (tipocategoria) {
          const q = query(
            collection(db, "productos"),
            where("category", "==", tipocategoria)
          );
          getDocs(q).then((snapshots) => {
            if (snapshots.size === 0) {
              console.log("No hay productos");
            }
            setListaProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false)
          });
        } else {
          const productsRef = collection(db, "productos");
          getDocs(productsRef).then((snapshots) => {
            if (snapshots.size === 0) {
              console.log("No hay productos");
            }
            setListaProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false)
          });
        }
      },[tipocategoria])
    
    return (
            <div>
                {loading ? <div className="spinnerLoad d-flex justify-content-center"> <Spinner animation="border" variant="warning" />Cargando</div> : <ItemList listaProductos={listaProductos}/>}
            </div>
        );
  }