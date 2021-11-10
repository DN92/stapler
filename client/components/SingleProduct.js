import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const singleProduct = (props) => {

  const product = props.product
  const {id, name, description, imgUrl, quantity, itemNumber, inStock} = product
  const linkDestination = `/products/${id}`


  return (
    <div>
      <h3>Product Name: {name}</h3>
      {/* img isn't working, fix when you can */}
      {/* <img src={imgUrl} /> */}
      <Link to={linkDestination}>
        <button type="button" >VIEW PRODUCT</button>
      </Link>
      <br />
      <p>
        description: {description} <br />
        quantity: {quantity} <br />
        itemNumber: {itemNumber} <br />
        inStock: {inStock ? 'true' : 'false'} <br />
      </p>
    </div>
  )
}

export default singleProduct;
