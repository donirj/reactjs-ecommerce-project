import { useProductos } from './useProductos'

import React from 'react'

function HookTest() {

    const {loading, productos} = useProductos()

  return (
    <div>HookTest</div>
  )
}

export default HookTest

