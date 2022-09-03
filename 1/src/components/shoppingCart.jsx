import React, { Component } from 'react';   
import Product from './product'
class ShoppingCart extends Component {

    render() { 

        const {products, onRes, onDel} = this.props
        //console.log(this.state.products)
        return ( 
            <>
                <h2>Shopping cart</h2>
                <button className="btn btn-secondary" onClick={onRes}>Reset</button>
                {products.map(p =>
                    <Product 
                        key={p.id} 
                        product={p}
                        onInc={() => this.props.onInc(p)}
                        onDec={() => this.props.onDec(p)}
                        onDelete={onDel}>
                        <span className='btn-primary'>{p.id}</span>
                    </Product>
                )}
        
            </>
        );
    }
}
 
export default ShoppingCart;