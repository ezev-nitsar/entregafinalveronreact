import { useState } from 'react'
import Button from 'react-bootstrap/Button';
export const ItemCount = ({ inicial, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const sumar = () => {
        setCantidad(cantidad + 1);
    }

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div className='flex'>
            <div className='d-flex justify-content-between'>
                <Button variant='danger' onClick={restar}>-</Button>
                <h4>{cantidad}</h4>
                <Button variant='success' onClick={sumar}>+</Button>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='primary' onClick={() => onAdd(cantidad)}>Agregar al Carrito</Button>
            </div>
        </div>
    );
}