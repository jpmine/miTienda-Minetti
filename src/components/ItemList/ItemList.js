import Item from "../Item/Item";
import { products } from "../../data/Products/Products";

export default function ItemList() {
    return (
            <div>
                {products.map((product, index) => (
                <Item product={product} key={product.id}/>
                )
            )}
            </div>
        );
  }