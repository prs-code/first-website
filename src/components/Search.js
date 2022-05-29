import React, { Component } from 'react';

import styles from './search.module.css';

class Search extends Component {

    constructor() {
        super()
        this.state = {
            text : "",
        }
    }

    changeHandler = (event) => {
        this.setState({
           text: event.target.value,
        })
    }
    render() {
        const {text} = this.state;
        return (
            <section className={styles.container}>
                <p>Search What U Want?</p>
                <div>
                <input type="text" value={text} onChange={this.changeHandler} placeholder='type here !'/>
                <br />
                <br />
                <span>Search for ... {text}</span>
                </div>
            </section>
        );
    }
}

export default Search;