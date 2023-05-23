import { ItemCount } from '../ItemCount/ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Card from 'react-bootstrap/Card';
import 'react-toastify/dist/ReactToastify.css';
const Item = ({ id, title, description, image, price }) => {
    
    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const { agregarProducto } = useContext(CartContext)
    const handleAgregar = (cantidad) => {
        setCantidadAgregada(cantidad);
        const producto = {
            id, title, price
        }
        if (!agregarProducto(producto, cantidad)) {
            toast("Este producto ya se encuentra en tu Carrito", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                type: "error"})
        } 
            
        
    }
    
    return (
        <div className="col-sm-8 col-md-6 col-lg-4 col-xl-3 mt-1">
            <Card>
                <Link to={`/item/${id}`}><Card.Img variant='top' src={image} style={{ height: '300px' }} /></Link>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                    {
                        cantidadAgregada > 0 ?
                            <div className='d-flex justify-content-center'>
                                <Link to='/cart' className='btn btn-info'>Ir al Carrito</Link>
                            </div>
                            :
                            <ItemCount inicial={1} onAdd={handleAgregar} />
                    }
                </Card.Body>
            </Card>
            <ToastContainer />
        </div>
    );
}
export default Item;