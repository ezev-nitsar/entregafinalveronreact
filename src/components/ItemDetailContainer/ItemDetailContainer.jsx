import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../db/firebase';
import Item from './../Item/Item';
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const itemDB = doc(db, 'products', id);
        getDoc(itemDB)
            .then(respuesta => {
                    const productoConId = { id: respuesta.id, ...respuesta.data() }
                    setProduct(productoConId);
                
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
            <Loading />
            :
            <div className="container">
                <div className="row justify-content-center">
                    <Item {...product} />
                </div>
            </div>
    );
}
export default ItemDetailContainer;