import React from 'react';

// props pasados desde itemDetail
const ItemCount = ({cantidad, setCantidad, stock, agregar}) => {


    const handleRestar = () => {
        // setCantidad viene de itemCount mediante props
        // es la cantidad default de producto al ver detalles 
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }


    return (
        <div>
            <button onClick={handleRestar} className='btn btn-outline-primary'>-</button>
            <span className='mx-2'>{cantidad}</span>
            <button onClick={handleSumar} className='btn btn-primary'>+</button>
            <br />
            <button onClick={agregar} className='btn btn-success'>Agregar al carrito</button>
        </div>
    );
};


export default ItemCount;
