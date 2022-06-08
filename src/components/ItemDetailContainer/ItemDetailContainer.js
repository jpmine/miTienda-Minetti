import React, { useEffect, useState } from 'react'
import {promesa} from '../../data/Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore, doc, getDoc} from "firebase/firestore"

export default function ItemDetailContainer(title, productId) {
    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        promesa
        //.then((res) => (res.json()))
        //.then((data) => setLapiceras(data.results))
        .then((res) => setProductDetail(res.find((product) => product.id === id)))
        //.then((data) => console.log(data.results))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])

    // useEffect(() => {
    //     const db = getFirestore()
    //     // 1. Traigo un producto
    //     const productRef = doc(db, "productos", productId);
    //     getDoc(productRef).then((snapshot) => {
    //         setProductDetail({ id: snapshot.id, ...snapshot.data() });
          
    //     });
    //   }, [productId]);
    

    return (
            <div>
                {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
        );
  }