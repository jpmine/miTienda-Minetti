import React from 'react'
import {useNavigate} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

//import Item from "../Item/Item"
//import Products from "./data/Products/Products"

export default function ItemDetail({productDetail}) {
  const {id, title, description, image, stock, price} = productDetail
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
                    <div className="white-box text-center"><img src={image} className="img-responsive" /></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Descripción</h4>
                    <p>{description}</p>
                    <h2 className="mt-5">
                     Precio: ${price}<small className="text-success">(36% off)</small>
                    </h2>
                    <hr></hr>
                    
                    {isInCart(id) ? (
                        <button>Ir al carrito</button>
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
                    <button classNameName='btn btn-dark' onClick={() =>volver('/productos')}>Volver a Productos</button>
                    <h3 className="box-title mt-5">Destacados</h3>
                    <ul className="list-unstyled">
                        <li><i className="fa fa-check text-success"></i>Sturdy structure</li>
                        <li><i className="fa fa-check text-success"></i>Designed to foster easy portability</li>
                        <li><i className="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                    </ul>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Brand</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td>Delivery Condition</td>
                                    <td>Knock Down</td>
                                </tr>
                                <tr>
                                    <td>Seat Lock Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Office Chair</td>
                                </tr>
                                <tr>
                                    <td>Style</td>
                                    <td>Contemporary&amp;Modern</td>
                                </tr>
                                <tr>
                                    <td>Wheels Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Type</td>
                                    <td>Cushion</td>
                                </tr>
                                <tr>
                                    <td>Head Support</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Suitable For</td>
                                    <td>Study&amp;Home Office</td>
                                </tr>
                                <tr>
                                    <td>Adjustable Height</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Model Number</td>
                                    <td>F01020701-00HT744A06</td>
                                </tr>
                                <tr>
                                    <td>Armrest Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
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