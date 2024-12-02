import React from 'react'
import { TbShoppingCart } from "react-icons/tb";

const CarWidget = () => {
  return (
    <div className='cartwidget'>
        <TbShoppingCart size={30} color='red'/>
        <p className='cartNumber'>2</p>
    </div>
  )
}

export default CarWidget