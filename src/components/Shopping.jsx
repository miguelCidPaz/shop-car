import React, { Component } from 'react'

class Shopping extends Component {
    render() {
        return (
            <div>
                <img src={this.props.product.photo} alt="" /><p>{this.props.product.name}</p><h1>{this.props.product.amount}</h1>
            </div>
        )
    }
}

export default Shopping