import { createContext, useState } from "react";
export const CartContext = createContext({
    cart: []
})
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [total, setTotal] = useState(0)
    const agregarProducto = (item, cantidad) => {
        if (!productoExiste(item.id)) {
            setCart(anteriores => [...anteriores, { ...item, cantidad }])
            setTotal(total + (parseFloat(item.price) * cantidad))
            setCantidadProductos(cantidadProductos + cantidad)
            return true
        } else {
            return false
        }
    }
    const quitarProducto = (idProducto) => {
        const datosProducto = cart.find(prod => prod.id === idProducto)
        setCantidadProductos(cantidadProductos - datosProducto.cantidad)
        setTotal(total - (datosProducto.price * datosProducto.cantidad))
        const nuevoCarrito = cart.filter(prod => prod.id !== idProducto)
        setCart(nuevoCarrito)
    }
    const limpiarCarrito = () => {
        setCart([])
        setTotal(0)
        setCantidadProductos(0)
    }
    const productoExiste = (idProducto) => {
        return cart.some(prod => prod.id === idProducto)
    }
    return (
        <CartContext.Provider value={{ cart, agregarProducto, quitarProducto, limpiarCarrito, total, cantidadProductos }}>
            {children}
        </CartContext.Provider>
    )
}