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

const Child = props => (
  <div>
    <div>{props.child.course}</div>
    <div>{props.child.description}</div>
    <div>{props.child.requirements}</div>
    <div>{props.child.registrationlink}</div>
    <div>{props.child.duration}</div>
    <div>{props.child.date.substring(0,10)}</div>
  </div>
)


export default class ChildrenList extends Component {
  constructor(props) {
    super(props);

    this.deleteChild = this.deleteChild.bind(this)

    this.state = {childs: []};
  }

  
  componentDidMount() {
    axios.get('http://localhost:5000/children/')
      .then(response => {
        this.setState({ childs: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  
  deleteChild(id) {
    axios.delete('http://localhost:5000/children/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      childs: this.state.childs.filter(el => el._id !== id)
    })
  }
    
  
  ChildrenList() {
    return this.state.childs.map(currentchild => {
      return <Child child={currentchild} deleteChild={this.deleteChild} key={currentchild._id}/>;
    })
  }

  
render(){
  return (
    <div className="cd">
      
      { this.ChildrenList() }
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
