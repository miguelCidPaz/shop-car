import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content }
        this.takeProduct = this.takeProduct.bind(this);
    }
    takeProduct = () => {
        this.props.take(this.state)
    }
    render() {
        return (
            <div className="product">
                <div className="frame"><img src={this.state.photo} alt='#' /></div>
                <div className="row">
                    <p>{this.state.name}</p>
                    <p>{this.state.price}</p>
                </div>
                <button onClick={this.takeProduct}>Comprar</button>
            </div>
        )
    }
}

export default Product