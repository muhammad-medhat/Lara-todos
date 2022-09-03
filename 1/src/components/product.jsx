import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    // state = { 
    //     id: this.props.product.id, 
    //     name: this.props.product.name, 
    //     nmbr: this.props.product.nmbr
    // }



    render() { 
        console.log('props', this.props)
        // console.log('state', this.props.product)
        const cssClasses = (this.props.product.nmbr > 1)? 'badge btn-primary m-2':'bold badge btn-warning m-2'
        return ( 
        <div className='row'>
            <div className="col-2">
                <span className='m-2'>
                    <Link to={`products/${this.props.product.id}`}>
                        {this.props.product.name}
                    </Link>
                </span>
                </div>
            <div className="col-1">
                <span className={cssClasses}>{this.props.product.nmbr}</span>
            </div>
            <span className="col">
                <button onClick={this.props.onInc} className="m-2 btn btn-primary">+</button>
                <button onClick={this.props.onDec} className="m-2 btn btn-danger">-</button>
                <span onClick={()=>this.props.onDelete(this.props.product)} className="m-2 btn btn-danger">
                    <i className='fas fa-trash'></i>
                </span>
            </span>
            
        </div> 
        );
    }
}
 
export default Product;