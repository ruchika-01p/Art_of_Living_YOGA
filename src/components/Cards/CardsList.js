/* eslint-disable no-use-before-define */
import React,{Component} from 'react';
import "./Cards.css";
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image1 from "../../images/WITfivicon.png";
import axios from 'axios';

const Card = props => (
  <div>
    <div>{props.card.course}</div>
    <div>{props.card.description}</div>
    <div>{props.card.requirements}</div>
    <div>{props.card.registrationlink}</div>
    <div>{props.card.duration}</div>
    <div>{props.card.date.substring(0,10)}</div>
  </div>
)


export default class CardsList extends Component {
  constructor(props) {
    super(props);

    this.deleteCard = this.deleteCard.bind(this)

    this.state = {cards: []};
  }

  
  componentDidMount() {
    axios.get('http://localhost:5000/adult/')
      .then(response => {
        this.setState({ cards: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  
  deleteCard(id) {
    axios.delete('http://localhost:5000/adult/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      cards: this.state.cards.filter(el => el._id !== id)
    })
  }
    
  
  CardList() {
    return this.state.cards.map(currentcard => {
      return <Card card={currentcard} deleteCard={this.deleteCard} key={currentcard._id}/>;
    })
  }

  
render(){
  return (
    <div className="cd">
      
      { this.CardList() }
    {/* {carding.map((a, i) => ( */}
    <div className="root2">
      <CardActionArea>
        <CardMedia
          className="media"
          image={image1}
          title="Contemplative Reptile"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {/* { this.CardList() } */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
       Requirements
          </Typography>
        </CardContent>
      </CardActionArea>
        <CardContent>
          <Typography paragraph>
     Description
          </Typography>
          <Typography paragraph>
          Date
          </Typography>
          <Typography paragraph>
           Time
          </Typography>
          <Typography paragraph>
          Registration link
          </Typography>
        </CardContent>
    </div>
   {/* ))}  */}
    </div>
  );
}
}

// export default Cards;
