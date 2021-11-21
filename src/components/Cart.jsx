import React, { Component } from 'react'
import Shopping from './Shopping'

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
        return (
            <>
                <div className='button' onClick={this.openCart}>CART</div>
                {
                    this.state.inView ?
                        this.props.content.map((product, index) => {
                            return <Shopping key={index} product={product} />
                        }) : null
                }
            </>
        )
    }
}

export default Cart