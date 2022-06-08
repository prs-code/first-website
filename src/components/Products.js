import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import styles from './Product.module.css'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state= {
            products: [],
        }
    }

    componentDidMount () {
        axios.get("https://fakestoreapi.com/products/")
            .then(response => this.setState({
                products: response.data,
            }))
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.products.length ?  this.state.products.map( product => <Card key={product.id} image={product.image} name= {product.title} price= {`${product.price} $`} />) : <h1>Loading ... </h1> }
            </div>
        );
    }
}

export default Products;
