import React from 'react'
import shirt from '../assets/shirt.jpg'
import '../styles/productcard.css'

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="product-card-wrapper">
      <img src={shirt} className="item-photo"/>
      </div>
    </div>
  )
}

export default ProductCard

{/* <div className="item-description">
<div>color options</div>
<h5>Company</h5>
<p>item name</p>
<div>stars</div>
<p>price</p>
<p>delivery time</p>
<p>stock</p>
</div> */}