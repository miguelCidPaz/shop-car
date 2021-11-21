import React, { Component } from 'react'
import Cart from './components/Cart';
import Product from './components/Product'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

            shopping: []
        }
    }

    take = (product) => {
        let cond = true;
        const shoppingCart = this.state.shopping

        for (let food of shoppingCart) {
            if (food.name === product.name) {
                const InCart = shoppingCart.find(food => food.name === product.name)
                InCart.amount = InCart.amount + product.amount;
                this.setState(prevState => ({
                    shopping: shoppingCart
                }))
                cond = false;
            }
        }

        if (cond) {
            this.setState(prevState => ({
                shopping: [prevState, product]
            }))
        }
    }

    render() {
        return (
            <>
                <div className='row'>
                    <h1>SHOP</h1>
                    <Cart content={this.state.shopping} />
                </div>
                <div className='all'><h1>Tienda</h1></div>
                {this.props.stock.map((product, index) => {
                    return <Product key={index} content={product} take={this.take} />
                })}
            </>
        )
    }
}

App.defaultProps = {
    stock: [
        { name: 'tomate', price: 1, amount: 1, photo: 'https://i.pinimg.com/736x/8b/05/3e/8b053eb162597c08ca13fd2baa69143a.jpg' },
        { name: 'lechuga', price: 1.50, amount: 1, photo: 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/2341182/0c57f8914f89642afa9b593a7f2fa98b_large.png&width=256&type=webp&quality=80' },
        { name: 'seta', price: 3, amount: 1, photo: 'https://frutasdelatierra.com/web/image/product.template/72/image_256/Setas%20%28bandeja%20200gr%29?unique=7fb4403' },
    ],
}

export default App