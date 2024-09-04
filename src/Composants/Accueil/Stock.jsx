import React from 'react'

const Stock = ({ totalStock }) => {
    return (
      <div>
        <p className='font-bold text-2xl'>Stock</p>
        <p className='text-lg'>Nombres de produits: <span>{totalStock}</span></p>
      </div>
    );
}

export default Stock
