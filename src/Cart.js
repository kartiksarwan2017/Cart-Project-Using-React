import React from 'react';

class Cart extends React.Component {
    render () {
        const arr = [1, 2, 3, 4, 5];
        return (
            <>
            <div className="cart">
                
                { arr.map((item) => {
                    return item + 5

                }) }
 
            </div>
            </>
        );
    }

}


export default Cart;