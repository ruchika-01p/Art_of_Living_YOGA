import React from 'react';
import './About.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../../images/WITfivicon.png';
import Rachana from '../../images/team/Rachana.jpg';
import Ravikaka from '../../images/team/ravikaka.jpg';
import Shweta from '../../images/team/shweta.jpg';
import Vihal from '../../images/team/vihal.jpg';
import Vrunda from '../../images/team/Vrunda.jpg';
import sunil from '../../images/team/sunil.jpg';
import srisri from '../../images/srisri.jpg';

const content = [
    {
        image: Ravikaka,
        text: 'Ravindra Lakhe',
        para: 'Mechanical Engineer, Entrepreneur and Art of Living Teacher',
        link:"/about",
    },
    {
        image: Vrunda,
        text: 'Vrunda Lakhe',
        para: 'Landscape designer, Homemaker and Art of Living Teacher',
        link:"/about",
    },
    {
        image: Shweta,
        text: 'Shweta Lakhe',
        para: 'Biomedical Engineer, IIT Madras, Art of Living Teacher, Ministry of Ayush certified Yoga teacher. Click on the link below to see the certificate for the same:',
        link:"https://drive.google.com/file/d/1BmwmmBHe_roak4H-c5zEHuyA83dSPShS/view?usp=sharing",
    },
    {
        image: Vihal,
        text: 'Vihal Trivedi',
        para: 'Mechanical Engineer, BITS Pilani, Art of Living Teacher, Ministry of Ayush certified Yoga teacher. Click on the link below to see the certificate for the same:',
        link:"https://drive.google.com/file/d/1rdpuqSxEMNw-FW0wrcMxnOjiF1richVl/view?usp=sharing",
    },
    {
        image: Rachana,
        text: 'Rachana Lakhe',
        para: 'MD Pathologist and Art of Living Teacher',
        link:"/about",
    },
    {
        image: sunil,
        text: 'Sunil Amte',
        para: 'Mechanical Engineer, Business Consultant and Art of Living Teacher',
        link:"/about",
    },
];

function About() {
    return (
        <div className="bods">
            <h2 className="abb">Founder and Inspiration</h2>
            <center> <img src={srisri} style={{width:"250px",borderRadius:"12px"}}/></center>
                <p className="bcc"> <b>Sri Sri Ravi Shankar</b> is a humanitarian,
                spiritual leader and an ambassador of peace and human values.
                Through his life and work, Sri Sri has inspired millions around
                the world with a vision of a stress-free, violence-free world.
                He has designed programs that provide techniques and tools to
                live a deeper, more joyous life and has established nonprofit
                organizations that recognize the human identity beyond the
                boundaries of gender, race, nationality, and religion.
            </p>
            <h2 style={{fontFamily:"Open Sans Condensed"}}><center>Our Teachers</center></h2>
            <div className="containerr1">
                {content.map((a, i) => (
            <div className="cards-wrapper">
                <div className="card2">
                    <CardActionArea>
                        <CardMedia
                            className='media'
                            image={a.image}
                            
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h7'
                                component='h2'
                            >
                                {a.text}
                            </Typography>
                            <Typography className="hola"
                                variant='body2'
                                color='black'
                                component='p'
                            >
                                {a.para}
                    </Typography>
                    <a href={a.link} target="_blank">
                        Click here:
                    </a>
                        </CardContent>
                    </CardActionArea>
                    </div>
            </div>
                ))}
        </div>
        </div>
    );
}

export default About;
