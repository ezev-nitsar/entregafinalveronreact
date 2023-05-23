import { createContext, useState } from "react";
export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const agregarProducto = (item, cantidad) => {
        if (!productoExiste(item.id)) {
            setCart(anteriores => [...anteriores, { ...item, cantidad }])
            return true
        } else {
            return false
        }
    }
    const quitarProducto = (idProducto) => {
        const nuevoCarrito = cart.filter(prod => prod.id !== idProducto)
        setCart(nuevoCarrito)
    }
    const limpiarCarrito = () => {
        setCart([])
    }
    const productoExiste = (idProducto) => {
        return cart.some(prod => prod.id === idProducto)
    }
    const getTotalPedido = () => {
        if (cart.length > 0) {
            return Math.round(((cart.reduce((prev, act) => prev + act.cantidad * act.price, 0)) + Number.EPSILON) * 100) / 100
        } else {
            return 0
        }
    }
    const getCantidadProductos = () => {
        if (cart.length > 0) {
            return cart.reduce((prev, act) => prev + act.cantidad, 0)
        } else {
            return 0
        }
    }
    return (
        <CartContext.Provider value={{ cart, agregarProducto, quitarProducto, limpiarCarrito, getCantidadProductos, getTotalPedido }}>
            {children}
        </CartContext.Provider>
    )
}