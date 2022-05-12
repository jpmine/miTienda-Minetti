import React from 'react'
import ItemGuitar from "../ItemGuitar/ItemGuitar"

export default function ItemDetail() {
  //const [loading, setLoading] = useState(false)
  const [guitars, setGuitars] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=guitarras')
        .then((res) => (res.json()))
        .then((data) => setGuitars(data.results))
        //.then((data) => console.log(data.results))
        .catch((err) => console.error(err))
    },[])
    
  return (
      <div className='d-flex justify-content-center flex-wrap'>
          {guitars.map((guitar) => (
          <ItemGuitar guitar={guitar} key={guitar.id}/>
          )
      )}
      </div>
    );
  }