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
            <button 
                onClick={handleRestar}
                //  
                className={`btn mx-1 ${cantidad === 1 ? "btn-outline-danger": "btn-outline-primary"}`}
                disabled={cantidad === 1}
                >
                -
            </button>
            <span className='mx-2'>{cantidad}</span>
            <button 
                onClick={handleSumar} 
                className={cantidad === stock ? "btn btn-outline-danger" : "btn btn-outline-primary"}
                disabled={cantidad === stock}
                >
                +
            </button>
            <br />
            <button onClick={agregar} className='btn btn-success'>Agregar al carrito</button>
        </div>
    );
};


export default ItemCount;
