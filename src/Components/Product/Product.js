import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    const {name, id} = product;
    return (
        <div style={{border: '1px solid red', margin: '10px', padding: '10px'}}>
            <h3>{name}</h3>
            <button onClick={()=> addToCart(id, name)}>add to cart</button>
        </div>
    );
};

export default Product;