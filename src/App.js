import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Adult from "./components/Adult/Adult";
// import Children from "./components/Children/Children";
import { Switch } from "react-router";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Form1 from "./components/Form/Form1";
import List from "./components/List/List";
import Homepage from "./components/Homepage/Homepage";
import Yoga from "./components/Yoga/Yoga";
import Beginners from "./components/Beginners/Beginners";
import Testimonial from "./components/Testimonial/Testimonial";
import AddCourse from './components/Form/AddCourse';
import Admin from './components/Admin/Admin';

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
      <Route path="/addCourse" exact component={AddCourse}/>
      {/* <Route path="/Children" exact component={Children}/> */}
      <Route path="/Yoga" exact component={Yoga}/>
      <Route path="/Beginners" exact component={Beginners}/>
      <Route path="/admin" exact component={Admin}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
