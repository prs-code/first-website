import { Route,Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Aboutus from "./components/Aboutus";


function App() {
  return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/" component={Landing} />
        </Switch>
        <Footer />
      </div>
  )
}

export default App;
