import React, { useEffect, useState } from 'react'
import {promesa} from '../../data/Products/Products'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {
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
    
    return (
            <div>
                {loading ? <p>Loading...</p> : <ItemDetail productDetail={productDetail}/>}
            </div>
        );
  }