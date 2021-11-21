import React, { Component } from 'react'
import '../CSS/styles.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.content }
        this.takeProduct = this.takeProduct.bind(this);
    }
    takeProduct = () => {
        this.props.take(this.state)
        this.setState(prevState => ({
            amount: 1
        }))
    }
    render() {
        return (
            <div className="product">
                <div className="frame"><img src={this.state.photo} alt='#' /></div>
                <div className="row">
                    <p className='name'>{this.state.name}</p>
                    <p className='price'>{this.state.price}€</p>
                </div>
                <button onClick={this.takeProduct}>Comprar</button>
            </div>
        )
    }
}

export default Product