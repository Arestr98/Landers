import { List, ListItem } from "@mui/material"
import { Product } from "../app/models/product"

interface Props{
    products: Product[]
    addProduct: () => void
}


export default function Catalog({products,addProduct}:Props) {
    return (
        <>
            <List>
                {products.map((product) => (
                    <ListItem key={product.id}>{product.name} - {product.price} </ListItem>
                ))}
            </List>
            <button onClick={addProduct}>add product</button>

        </>

    )
}