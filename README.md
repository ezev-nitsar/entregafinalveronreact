# SuperVirtual.com
Este es el proyecto final del Curso de React JS de Ezequiel Verón

## Descripción y abordaje

Se simula una tienda virtual donde se pueden comprar productos de cuatro categorías
Ya desde la página principal, donde se muestran todos los productos, se pueden agregar
los mismos al carrito en la cantidad deseada. Esto es intencional, ya que queremos dar 
la mayor flexibilidad al momento de comprar. 

Cuando hay al menos un producto cargado en el carrito, aparece en la esquina superior derecha 
el ícono del carrito con la cantidad total de productos agregados. Eso nos dirige al 'cart', donde 
podemos ver la lista de productos adicionados, quitarlos si nos arrepentimos de algunos, y ver el 
total de la compra. 

## Acceso a rutas

En caso de ir a la ruta /item/ e ingresar un id de producto que no existe, la app lo detectará e informará 
que el producto no existe y nos invitará a buscar entre los productos disponibles. 

Lo mismo sucede si invocamos al /cart o al /checkout sin productos cargados. 

## Productos y Finalización del Pedido

Los productos son consultados de una base de datos de Firebase en Google Cloud 
Al generar una orden, la misma se carga en Firebase según el modelo indicado en el PPT de la entrega final 
y se informa al usuario el ID generado 

## Tecnologías de terceros utilizadas

## [Bootstrap] (https://react-bootstrap.github.io/)
Utilizado para gestionar la visualización del proyecto y la responsividad. 

## [Firebase] (https://firebase.google.com/)
Proveedor de Base de Datos de Google, utilizado para la persistencia de datos del Proyecto. 

## [React-Toastify] (https://www.npmjs.com/package/react-toastify)
Se utiliza para enviar notificaciones de error, en caso de, por ejemplo, perder el acceso a la base de datos 

## [React-Router-Dom] (https://reactrouter.com/)
Router de React para manejar las rutas de la aplicación