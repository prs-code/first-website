import React, { Component } from 'react';

import {v4} from "uuid";
import Card from './Card';
import styles from './Cards.module.css';

import Iphone from '../images/iphone_11_PNG33.png';


class Cards extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {image: Iphone, name:"iphone X", price:"600 $" },
                {image: Iphone, name:"iphone 11", price:"450 $"},
                {image: Iphone, name:"iphone 10 pro", price:"600 $"},
                {image: Iphone, name:"iphone 13", price:"600 $"},

            ]
        };
    }
    render() {
        const {data} =this.state;
        return (
            <section className={styles.container}>
                {data.map( item => <Card key={v4()} image={item.image} name= {item.name} price= {item.price} />  )}
            </section>
        );
    }
}

export default Cards;
