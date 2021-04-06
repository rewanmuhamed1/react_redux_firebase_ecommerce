import React from 'react'
import ProductItem from './ProductItem'


const ProductsList = ({ products }) => {
  return (
    <div className="project-list section">
      <div className="row">
        {
          products && products.map(product => {
           // console.log("product.id product list",product.id);
            return (
             
                <ProductItem product={product.products_data} key={product.id} />
             
            )
          }
          )

        }


      </div>
    </div>
  )
}

export default ProductsList