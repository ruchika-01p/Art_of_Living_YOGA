import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {content} from "./content";
import "./yoga.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginBottom:'6px',
        marginTop:"8px",
        justifyContent:"center",
    },
    media: {
        height: 140,
    },
});

export default function Yoga() {
  const classes = useStyles();

  return (
     
<div className="cardyoga">
{content.map((a, i) => (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {a.topic}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {a.para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
))}
  
</div>
  );
}

