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
                {id: 1, image: Iphone, name:"iphone X", price:"600 $" },
                {id: 2, image: Iphone, name:"iphone 11", price:"450 $"},
                {id: 3, image: Iphone, name:"iphone 10 pro", price:"600 $"},
                {id: 4, image: Iphone, name:"iphone 13", price:"600 $"},

            ]
        };
    }
    render() {
        const {data} =this.state;
        return (
            <section className={styles.container}>
                {data.map( item => <Card 
                key={v4()} 
                image= {item.image} 
                name= {item.name} 
                price= {item.price} 
                id= {item.id} /> )}
            </section>
        );
    }
}

export default Cards;
