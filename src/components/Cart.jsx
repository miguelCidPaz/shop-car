import React, { Component } from 'react'
import Shopping from './Shopping'
import '../CSS/styles.css'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.content,
            inView: false
        }
        this.openCart = this.openCart.bind(this);
    }

    openCart = () => {
        const view = !this.state.inView;
        this.setState(prevState => ({
            inView: view
        }))
    }

    render() {
        let amount = 0
        this.props.content.map(product => amount = amount + product.amount)
        return (
            <div className='button'>
                <div className='title' onClick={this.openCart}><div className="amount">{amount > 9 ? '9+' : amount}</div>CART</div>
                <div className="cart">
                    {
                        this.state.inView ?
                            this.props.content.map((product, index) => {
                                return <Shopping key={index} product={product} />
                            }) : null
                    }
                </div>
            </div>
        )
    }
}

export default Cart