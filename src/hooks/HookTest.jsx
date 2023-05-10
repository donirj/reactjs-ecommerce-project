import { useProductos } from './useProductos'

import React from 'react'

function HookTest() {

    const {loading, productos} = useProductos()
    // console.log(productos)

  return (
    <div>HookTest</div>
  )
}

export default HookTest

