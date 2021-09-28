import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adult from "./components/Adult/Adult";
import Children from "./components/Children/Children";
import { Switch } from "react-router";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Form1 from "./components/Form/Form1";
import List from "./components/List/List";
import Homepage from "./components/Homepage/Homepage";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/form" exact component={Form} />
      <Route path="/form1" exact component={Form} />
      <Route path="/list" exact component={List} />
      <Route path="/about" exact component={About} />
      <Route path="/adult" exact component={Adult}/>
      <Route path="/Children" exact component={Children}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
