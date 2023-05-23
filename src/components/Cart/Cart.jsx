import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItem } from "../CartItem/CartItem"
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
export const Cart = () => {

    const { cart, total, cantidadProductos } = useContext(CartContext)

    if (cantidadProductos === 0) {
        return (
            <div className="container mt-2">
                <h1>No hay productos</h1>
                <Link to='/' className="btn btn-outline-info w-100">Ir al Catálogo</Link>
            </div>
        )
    } else {
        return (
            <div className="container mt-2">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Unitario</th>
                            <th>Subtotal</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(productosCart => <CartItem key={productosCart.id} {...productosCart} />)}
                    </tbody>
                </Table>
                <h3>Total del Carrito: ${Math.round((total + Number.EPSILON) * 100) / 100}</h3>
                <Link to={'/checkout'} className="btn btn-outline-success w-100">Pasar por Caja</Link>
            </div>)
    }
}