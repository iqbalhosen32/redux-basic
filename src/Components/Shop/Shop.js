import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products, addToCart} = props;
    return (
        <div>
            <h3>This is Shop</h3>
            {
                products.map(pd => <Product 
                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}
                     ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}



export default connect(mapStateToProps, mapDispatchToProps)(Shop);