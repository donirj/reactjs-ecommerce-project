import ItemCard from "../../components/ItemCard/ItemCard"
import { withProductsData } from "./withProducts"
import './_ItemsList2.scss'

const ItemList2 = ( {productos, Loading} ) => {
    return (
        <div className="productsBox">
            {
                Loading
                    ? <h2>Cargando</h2>
                    : productos.map((item) => <ItemCard item={item} key={item.id}/>)
            }
        </div>
    )
}

export default withProductsData(ItemList2)