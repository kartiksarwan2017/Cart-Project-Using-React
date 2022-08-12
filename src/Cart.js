import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }

        // this.increaseQuantity = this.increaseQuantity.bind(this);

        // this.testing();

    }
    
    render () {

        return (
            <>
            <div className="cart">

                <CartItem 
                qty = {1} 
                price = {99}
                title = {"Watch"}
                img = {''}/>

 
            </div>
            </>
        );
    }

}


export default Cart;