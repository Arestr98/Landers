import { useEffect, useState } from "react";
import Catalog from "../../features/Catalog";
import { Product } from "../models/product";
import Typography from '@mui/material/Typography';





function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'Product new',
      description: 'Some desc',
      price: 100,
      pictureUrl: 'Some pic',
      type: 'Some tipe',
      brand: 'Some brand',
      quantityInStock: 1,
    },
    ])
  }
  return (
    <div>
      <Typography variant="h1">Re-Store</Typography>
      <Catalog products={products} addProduct={addProduct} />
      
    </div>

  );
}

export default App;
