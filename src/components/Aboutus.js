import { Link, Outlet} from "react-router-dom";

const Aboutus = () => {

    return (
            <div>
                <h3 style={{"color": "lightblue"}}>Declarative</h3><br/>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br/>
                Declarative views make your code more predictable and easier to debug</p><br/>
                <h3 style={{"color": "lightblue"}}>Component-Based</h3><br/>
                <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.<br/>
                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</p><br/>
                <h3 style={{"color": "lightblue"}}>Learn Once, Write Anywhere</h3><br/>
                <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.<br/>
                React can also render on the server using Node and power mobile apps using React Native.</p><br/>
                <Outlet />
                
                <ul>
                    <li><Link to="Search">Search ...</Link></li>
                </ul>
            </div>
        );
    }

export default Aboutus;
