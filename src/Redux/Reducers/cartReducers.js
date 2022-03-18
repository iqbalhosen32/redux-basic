import { ADD_TO_CART, REMOVE_CART } from "../Actions/cartActions"

const initialState = {
    cart: [],
    products: [
        {name: 'Dell', id: 1},
        {name: 'Asus', id: 2},
        {name: 'HP', id: 3},
        {name: 'Lenovo', id: 4},
        {name: 'Windows', id: 5}
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_TO_CART: 
        // console.log(action)
        const newItem = {
            productId: action.id,
            name: action.name,
            cartId: state.cart.length
        }
        const newCart = [...state.cart, newItem]
        return {...state, cart: newCart}

        case REMOVE_CART: 
        const id = action.id;
        const remainingCart = state.cart.filter(item => item.cartId !== id)
        return {...state, cart: remainingCart}

        default:
            return state
    }
}

export default cartReducer;