import React, { Component } from 'react';

import styles from './Card.module.css';

import Up from "../images/up.svg";
import Down from "../images/down.svg";



class Card extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    };

    downCounter = () => {
        if (this.state.counter >= 1)
        this.setState(prevState => ({
                counter: prevState.counter - 1,
        }))
    };

    upCounter = () => {
        this.setState(prevState =>({
            counter: prevState.counter + 1,

        }))
    };

    render() {
        const {image, name, price} = this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt='product-mobile'/>
                <h3>{name}</h3>
                <p>{price} {counter ? `* ${counter} = ${counter * Number(price.split(" ")[0])} $` : ""}</p>
                <div className={styles.counter}>
                    <img className={!this.state.counter && styles.deactive} src={Down} alt="arrow" onClick={this.downCounter} />
                    <span>{counter}</span>
                    <img src={Up} alt="arrow" onClick={this.upCounter}/>
                </div>
            </div>
        );
    };
};

export default Card;


