import React from "react";
import img1 from '../../images/img1.jpeg';
import img2 from '../../images/img2.jpeg';
import user from "../../images/user.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {

    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
      </div>
    );
  };
  
  const Testimonial = () => {
    return (
      <div
        className="testimonial"
        style={{ display: "flex", justifyContent: "center", marginTop: 0}}>
        <div className="testimonial-1" style={{ width: "50%",textAlign: "center"}}>
          <h1 className="heading-1">TESTIMONIALS</h1>
          <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots infinite autoplay autoplaySpeed={6100}>
            <Card 
            img={img2}
            desc ="The yoga class makes me set the tone for the day.
            It really calms me down. Although a little early, I got a chance to learn Sudarshan Kriya, 
            which is proving beneficial to me. Pranamayam helps me to calm myself.
           Also the evening chanting helps a lot."
           name="Kavita Ambulkar"
           city="Pune" 
            />
            
           <Card 
            img={user}
            desc ="Jai Gurudev, I am still learning and it's my baby step towards spritual path. 
            It provides a platform where you understand and connect with your body and mind. 
            I think it will lead me towards inner peace. 🙏"
           name="Aditya"
           city="Bangalore"
            />

           <Card 
            img={img1}
            desc =" I feel so fortunate that I got a wonderful opportunity to learn 
            Sudarshan Kriya at the comfort of my home. I did the breath and meditation course out of curiosity.
            But the results that I have seen in my self over the time are amazing. I was so amazed to see 
            the increase in my energy levels during the course itself. I have been able to overcome my anger 
            and anxiety to a level where even my family members have seen the change. 
            My teachers have been doing a wonderful job in bringing this wonderful change in so many lives. 
            I highly recommend learning this life changing skill to everyone."
            name="Harshada"
            city="Pune"
            />
          </Slider>
        </div>
      </div>
    );
  };
  
  const Card = (props) => {
    return (
      <div className="card-component"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
         marginBottom: "60px"
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={props.img}
          style={{
            width: 180,
            height: 180,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 10,
          }}
        />

        <p style={{marginTop: 15}}>
          <span className="name">{props.name}</span>, 
          <span className="city"> {props.city}</span>
        </p>

        <p>
        <span className="description">{props.desc}</span>
        </p>
      </div>
    );
  };
  
  export default Testimonial;