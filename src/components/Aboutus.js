import React, { Component } from 'react';

class Aboutus extends Component {
    render() {
        return (
            <div>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br/>
                Declarative views make your code more predictable and easier to debug</p>
                <h3>Component-Based</h3>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.<br/>
                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p>
                <h3>Learn Once, Write Anywhere</h3>
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.<br/>
                React can also render on the server using Node and power mobile apps using React Native.</p>
            </div>
        );
    }
}

export default Aboutus;
