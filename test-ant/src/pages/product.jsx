/* eslint-disable no-unused-vars */
import React from 'react'

const product = ({name, price, description}) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>price: {price}$</div>
      <div>descript: {description}</div>
    </div>
  )
}

export default product
