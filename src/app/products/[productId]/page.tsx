import React from 'react'

function ProductDetails({params}:{
    params:{productId:string}
}) {
  return (
    <div>Product Details {params.productId}</div>
  )
}

export default ProductDetails