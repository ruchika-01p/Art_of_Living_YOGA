import React, { Component } from 'react';
import axios from 'axios';
import { Button, IconButton, TextField, Divider } from "@material-ui/core";
import { Facebook, Lock, PersonOutline, Phone } from "@material-ui/icons";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


// Course: "Meditation and Breath Workshop" ,
//         Time: "2 hours/day",
//         Date: "4-day-workshop",
//         Requirements: "",
//         Description: "",
//         Registrationlink

export default class Form extends Component {
    constructor(props){
        super(props);
    
        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangeRequirements = this.onChangeRequirements.bind(this);
        this.onChangeRegistrationlink = this.onChangeRegistrationlink.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            course: '',
            description: '',
            time: 0,
            requirements:'',
            registrationlink:'',
            date: new Date(),
          }
        }


  onChangeCourse(e) {
    this.setState({
      course: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeRequirements(e) {
    this.setState({
      requirements: e.target.value
    })
  }

  onChangeRegistrationlink(e) {
    this.setState({
      registrationlink: e.target.value
    })
  }

  onChangeTime(e) {
    this.setState({
      time: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const card = {
      course: this.state.course,
      description: this.state.description,
      requirements: this.state.requirements,
      registrationlink: this.state.registrationlink,
      time: this.state.time,
      date: this.state.date
    }

    console.log(card);

    axios.post('http://localhost:5000/adult/', card)
      .then(res => console.log(res.data));

    window.location = '/adult';
  }

    render(){
        return (
        <div className="formyy">
           {/* <div className='Sign-up-form'> */}
            <form className='formed-class'  onSubmit={this.onSubmit}>
           
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <PersonOutline />
                        </IconButton>
                        <TextField
                            label='Name of Program/Course'
                            type='text'
                            HalfWidth
                            required
                            value={this.state.course}
              onChange={this.onChangeCourse}
                        />
                    </div>
                    <div>
                   <input type="file"/>
                    <img src=""/>
                    </div>
                    <div className='input-ico-div'>
                        <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Requirements'
                            HalfWidth
                            required
                            type='text'
                            value={this.state.requirements}
                            onChange={this.onChangeRequirements}
                        />
                    </div>
                    <div>
                    <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Description'
                            HalfWidth
                            required
                            type='text'
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />  
                        <br/>
                         <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <div className="form-group">
                        <label>Date: </label>
                      <div>
                        <DatePicker
                          selected={this.state.date}
                          onChange={this.onChangeDate}
                        />
                      </div>
                    </div>

                        <br/>
                         <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Time'
                            HalfWidth
                            required
                            type='text'
                            value={this.state.time}
                 onChange={this.onChangeTime}
                        />  
                        <br/>
                         <IconButton disabled className='icons'>
                            <Lock />
                        </IconButton>
                        <TextField
                            label='Registration Link'
                            HalfWidth
                            required
                            type='text'
                            value={this.state.registrationlink}
                            onChange={this.onChangeRegistrationlink}
                        />  
                      
                    </div>
                    <br /> 
                     <div className="form-group">
                    <input type="submit" value="Create Card" className="btn btn-primary" />
                  </div>
                </form>
        {/* </div> */}
        </div>
    )
}
}
