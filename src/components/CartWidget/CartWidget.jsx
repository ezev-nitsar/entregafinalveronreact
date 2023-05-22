import cartIcon from './assets/cart-icon.svg';
const cartIconSize = {
    'height': '32px',
    'width' : '32px'
}
const CartWidget = () => {
    return (
        <div>
            <img src={cartIcon} alt='Carrito' style={cartIconSize}/>
            <span className='lead'>&nbsp;0</span>
        </div>

    );
}
export default CartWidget;