import React, { useEffect, useState } from 'react'
import FetchDetail from '../FetchDetail/FetchDetail'

export default function FetchContainer() {
    const [loading, setLoading] = useState(false)
    const [guitars, setGuitars] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=guitarras')
        .then((res) => (res.json()))
        .then((data) => setGuitars(data.results))
        //.then((data) => console.log(data.results))
        .catch((error) => console.log(error))
        .finally(()=>setLoading(false))
    },[])
    
    return (
            <div>
                {loading ? <h3>Loading...</h3> : <FetchDetail guitars={guitars}/>}
            </div>
        );
  }