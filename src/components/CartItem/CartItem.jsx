import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button';
//Math.round((total + Number.EPSILON) * 100) / 100
export const CartItem = (item) => {
    const { quitarProducto } = useContext(CartContext)
    return (
        <>
            <tr>
                <td>{item.title}</td>
                <td>{item.cantidad}</td>
                <td>${item.price}</td>
                <td>${Math.round(((item.cantidad * item.price) + Number.EPSILON) * 100) / 100 }</td>
                <td><Button className='btn btn-danger bi bi-trash' onClick={() => quitarProducto(item.id)}></Button></td>
            </tr>
        </>
    )
}