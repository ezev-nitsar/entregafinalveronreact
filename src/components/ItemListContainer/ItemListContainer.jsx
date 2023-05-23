import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../db/firebase';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';
import ItemList from '.././ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        var datosBD = null;
        id
            ?
            //id está seteado, traigo todos los registros donde category_id == id
            datosBD = query(collection(db, 'products'), where('category_id', '==', parseInt(id)))
            :
            //id no está seteado, traigo todos los productos
            datosBD = collection(db, 'products')
        getDocs(datosBD)
            .then(respuesta => {
                const productosAdaptados = respuesta.docs.map(doc => {
                    const dataBD = doc.data()
                    return { id: doc.id, ...dataBD }
                })
                setData(productosAdaptados)
            })
            .catch(error => {
                console.log("Hubo un error: " + error);
            })
            .finally(() => {
                setLoading(false)
            });
    }, [id]);
    return (
        loading
            ?
            <LoadingComponent aviso={'Cargando productos, por favor espera...'}/>
            :
            <div className="container">
                <h1>{greeting}</h1>
                <div className='row justify-content-center'>
                    <ItemList products={data} />
                </div>
            </div>
    );

}
export default ItemListContainer;