import React from 'react';
import { Link } from "react-router-dom";
import Testimonials from '../Testimonial/Testimonial';
import adult from "../../images/adult.jpg";
import children from "../../images/children.jpg";


function Homepage(){
    return(

      <div className="homyy">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style dangerouslySetInnerHTML={{__html: "\nbody, html {\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.bg-img {\n  /* The image used */\n  background-image: url(\"https://images8.alphacoders.com/523/thumb-1920-523923.jpg\");\n\n  min-height: 650px;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: relative;\n}\n\n/* Add styles to the form container */\n.container {\n  position: absolute;\n  right: 5;\n  margin: 20px;\n  max-width: 300px;\n  padding: 16px;\n  background-color: none;\n}\n\n/* Full-width input fields */\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit button */\n.btn {\n  background-color: orange;\n  color: black;\n border-radius:10px;\n  padding: 10px 10px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\n.btn:hover {\n  opacity: 1;\n}\n" }} />
  
      <div className="bg-img">
        <form action="/action_page.php" className="container">
          <img src={adult} style={{width:"230px",height:"150px",borderRadius:"10px"}}/><br/>
         
        <Link to='/adult'>  <button type="submit" className="btn"><b>Courses for 18+</b></button></Link><br/><br/>
          <img src={children} style={{width:"230px",height:"150px",borderRadius:"10px"}}/><br/>
         
        <Link to='/adult'> <button type="submit" className="btn"><b>Courses for children</b></button></Link>
          
        </form>
        
      </div>
    <div> <Testimonials/></div>
    </div>
  );
    }
      

export default Homepage;
