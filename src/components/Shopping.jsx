import React, { Component } from 'react'

class Shopping extends Component {
    render() {
        return (
            <div className='cart-product'>
                <img src={this.props.product.photo} alt="" /><div className="row"><p>{this.props.product.name}</p><p>{this.props.product.amount}</p></div>
            </div>
        )
    }
}

export default Shopping