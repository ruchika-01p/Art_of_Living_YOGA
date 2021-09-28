import { Divider } from '@material-ui/core';
import image1 from "../../images/WITfivicon.png";
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



function List() {
    return (
        <div className="list">
            <div className="list-1">
                <img src={image1} className="imagy" />
                <label>Date: </label>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="list-2">
            <Card className="card-1">
                <h2>Requirements: </h2>
            </Card>
            <Card>
               <CardContent>
                   <h4>Description</h4>
                   <p></p>
               </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default List
