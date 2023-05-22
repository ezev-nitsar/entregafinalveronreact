import Button from 'react-bootstrap/Button';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
export const CartItem = (item) => {
    const { quitarProducto } = useContext(CartContext)
    return (
        <>
            <tr>
                <td>{item.title}</td>
                <td>{item.cantidad}</td>
                <td>${item.price}</td>
                <td>${item.cantidad * item.price}</td>
                <td><Button className='btn btn-danger bi bi-trash' onClick={() => quitarProducto(item.id)}></Button></td>
            </tr>
        </>
    )
}