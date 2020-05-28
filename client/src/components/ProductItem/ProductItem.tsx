import * as React from "react";
// import ApiClient from "../../service/ApiClient";
import { Product } from "../../types/app";

const ProductItem = (): React.ReactElement => {
  // const [products, setProducts] = React.useState([] as Product[]);
  const [products] = React.useState([] as Product[]);
  // React.useEffect(() => {
  //   async function getProducts(): Promise<void> {
  //     const productsResponse = await ApiClient.getProducts();
  //     setProducts(productsResponse.result?.products || []);
  //   }
  //   getProducts();
  // }, []);
  return (
    <div>
      {products.map((p, index) => (<div key={index}>{p.name}</div>))}
    </div>
  )
}

export default ProductItem;