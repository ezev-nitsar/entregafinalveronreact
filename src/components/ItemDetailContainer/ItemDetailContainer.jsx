import { useParams, Link } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../db/firebase';
import { useEffect, useState } from "react";
import { LoadingComponent } from "../LoadingComponent/LoadingComponent";
import Item from './../Item/Item';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productoExiste, setProductoExiste] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const itemDB = doc(db, 'products', id);
        getDoc(itemDB)
            .then(respuesta => {
                if (respuesta.exists()) {
                    const productoConId = { id: respuesta.id, ...respuesta.data() }
                    setProduct(productoConId);
                    setProductoExiste(true);
                }
            })
            .catch(error => {
                console.log("Hubo un error: " + error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id]);

    return (
        loading
            ?
            <LoadingComponent aviso={'Cargando producto...'} />
            :
            productoExiste
                ?
                <div className="container">
                    <div className="row justify-content-center">
                        <Item {...product} />
                    </div>
                </div>
                :
                <div className="container">
                    <div className="row justify-content-center">
                        <h3>Lo sentimos, el producto que buscas no existe.</h3>
                        <Link to='/' className="btn btn-info">Buscar entre muchos productos geniales</Link>
                    </div>
                </div>
    );
}
export default ItemDetailContainer;