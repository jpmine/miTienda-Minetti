import React from 'react'
import {useNavigate} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import {Link} from 'react-router-dom'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

//import Item from "../Item/Item"
//import Products from "./data/Products/Products"

export default function ItemDetail({productDetail}) {
  const {id, title, description, image, stock, price, body, brand, mast, diapason, mics, discount, featured1, featured2, featured3} = productDetail
  const volver = useNavigate()
  const { addToCart, isInCart} = React.useContext(CartContext);
  const [count, setCount] = React.useState(1)

  return (
    <>
      <div className="container">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h6 className="card-subtitle">{title}</h6>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center"><img src={image} className="img-responsive" alt={title} /></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Descripción</h4>
                    <p>{description}</p>
                    <h2 className="mt-5">
                     Precio: ${price}<br />
                     </h2>
                     <h3>
                     <small className="text-success">Descuento: {discount}%</small>
                     </h3>
                     <h5>
                     <small>Stock disponible: {stock} unidades</small>
                     </h5>
                    
                    <hr />
                    
                    {isInCart(id) ? (
                        <Link to='/Cart'><button className="btn btn-warning">Ir al carrito</button></Link>
                    ) : (
                    <div>
                        <ItemCount 
                            onSubmit={()=> addToCart(productDetail, count)}
                            count={count}
                            setCount={setCount}
                            stock={stock}
                        />
                    </div>
                    )}
                    <button className='btn btn-dark' onClick={() =>volver('/productos')}>Volver a Productos</button>
                    <h1 className="text-end"><BsFillArrowDownCircleFill /></h1>
                    <h3 className="box-title mt-5">Destacados</h3>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check text-success"></i>{featured1}</li>
                        <li><i className="fa fa-check text-success"></i>{featured2}</li>
                        <li><i className="fa fa-check text-success"></i>{featured3}</li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">Detalles técnicos</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Marca</td>
                                    <td>{brand}</td>
                                </tr>
                                <tr>
                                    <td>Cuerpo</td>
                                    <td>{body}</td>
                                </tr>
                                <tr>
                                    <td>Mástil</td>
                                    <td>{mast}</td>
                                </tr>
                                <tr>
                                    <td>Diapasón</td>
                                    <td>{diapason}</td>
                                </tr>
                                <tr>
                                    <td>Micrófonos</td>
                                    <td>{mics}</td>
                                </tr>                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
    )
  } 