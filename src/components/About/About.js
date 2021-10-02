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
import Ravikaka from '../../images/team/Ravikaka.jpg';
import Shweta from '../../images/team/Shweta.jpg';
import Vihal from '../../images/team/Vihal.jpg';
import Vrunda from '../../images/team/Vrunda.jpg';
import sunil from '../../images/team/sunil.jpg';
import srisri from '../../images/srisri.jpg';

const content = [
  {
    image: Ravikaka,
    text: 'Ravindra Lakhe',
  },
  {
    image: Vrunda,
    text: 'Vrunda Lakhe',
  },
  {
    image: Shweta,
    text: 'Shweta Lakhe',
  },
  {
    image: Vihal,
    text: 'Vihal Trivedi',
  },
  {
    image: Rachana,
    text: 'Rachana Lakhe',
  },
  {
    image: sunil,
    text: 'Sunil Amte',
  },
];

function About() {
  return (
    <div className='bods'>
      <h2 className='abb'>Founder and Inspiration</h2>
      <center>
        {' '}
        <img src={srisri} style={{ width: '250px', borderRadius: '12px' }} />
      </center>
      <p className='bcc'>
        {' '}
        <b>Sri Sri Ravi Shankar</b> is a humanitarian, spiritual leader and an
        ambassador of peace and human values. Through his life and work, Sri Sri
        has inspired millions around the world with a vision of a stress-free,
        violence-free world. He has designed programs that provide techniques
        and tools to live a deeper, more joyous life and has established
        nonprofit organizations that recognize the human identity beyond the
        boundaries of gender, race, nationality, and religion.
      </p>
      <h2 style={{ fontFamily: 'Open Sans Condensed' }}>
        <center>Our Teachers</center>
      </h2>
      <div className='containerr1'>
        {content.map((a, i) => (
          <div className='cards-wrapper'>
            <div className='card2'>
              <CardActionArea>
                <CardMedia className='media' image={a.image} />
                <CardContent>
                  <Typography gutterBottom variant='h7' component='h2'>
                    {a.text}
                  </Typography>
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
