import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { db } from '../../db/firebase'
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { LoadingComponent } from '../LoadingComponent/LoadingComponent'
import { Congrats } from '../Congrats/Congrats'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { CartItem } from "../CartItem/CartItem"
import Table from 'react-bootstrap/Table';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const [numeroOrden, setNumeroOrden] = useState('')
    const { cart, limpiarCarrito, getCantidadProductos, getTotalPedido } = useContext(CartContext)
    const createOrder = async ({ nombre, telefono, email }) => {
        
        setCargando(true)
        try {
            const objPedido = {
                buyer: {
                    nombre, telefono, email
                },
                items: cart,
                total: getTotalPedido(),
                date: Timestamp.fromDate(new Date())
            }
            const orderCollection = collection(db, "orders");
            const datosOrden = await addDoc(orderCollection, objPedido)
            setNumeroOrden(datosOrden.id)
            limpiarCarrito();
        }
        catch (error) {
            toast("Error: " + error, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                type: "error"
            })
        }
        finally {
            setCargando(false);
        }
    }
    if (cargando) {
        return (
            <>
                <LoadingComponent aviso={'Se está generando tu pedido, por favor espera...'} />
            </>
        )
    }
    if (numeroOrden) {
        return (
            <Congrats orderId={numeroOrden} />
        )
    }
    return (
        
        getCantidadProductos() > 0
            ?
            <div className='container'>
                <h1>Revisión y Carga del Pedido</h1>
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
                <h3>Total del Carrito: ${getTotalPedido()}</h3>
                <CheckoutForm onConfirm={createOrder} />
                <ToastContainer/>
            </div>
            :
            <div className="container">
                <div className="row justify-content-center">
                    <h3>Tu carrito está vacío.</h3>
                    <Link to='/' className="btn btn-info">Buscar entre muchos productos geniales</Link>
                </div>
            </div>
            
    )
}