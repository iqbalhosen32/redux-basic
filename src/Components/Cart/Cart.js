import React from 'react';
import { removeCart } from '../../Redux/Actions/cartActions';
import { connect } from 'react-redux';

const Cart = (props) => {
    const {cart, removeCart} = props;
    return (
        <div>
            <h3>this is cart</h3>
            <ul>
                {
                    cart.map(pd => <li key={pd.cartId}>{pd.name} <button onClick={()=> removeCart(pd.cartId)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeCart: removeCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);