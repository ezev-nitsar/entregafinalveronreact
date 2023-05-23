import { CheckoutForm } from '../CheckoutForm/CheckoutForm'
import { db } from '../../db/firebase'
import { useState, useContext } from 'react'
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import { LoadingComponent } from '../LoadingComponent/LoadingComponent'
import { Congrats } from '../Congrats/Congrats'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
    const [cargando, setCargando] = useState(false)
    const [numeroOrden, setNumeroOrden] = useState('')
    const { cart, total, limpiarCarrito, cantidadProductos } = useContext(CartContext)
    const createOrder = async ({ nombre, telefono, email }) => {
        setCargando(true)
        try {
            const objPedido = {
                buyer: {
                    nombre, telefono, email
                },
                items: cart,
                total: total,
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
                <ToastContainer />
            </>
        )
    }
    if (numeroOrden) {
        return (
            <Congrats orderId={numeroOrden} />
        )
    }
    return (
        cantidadProductos > 0
            ?
            <div className='container'>
                <h1>Finalizar Pedido</h1>
                <CheckoutForm onConfirm={createOrder} />
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