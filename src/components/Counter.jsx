import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter : 0,
            addValue: '' ,
            subtractValue: ''
        }
    }

    handleIncrement(){
        let counter = this.state.counter;
        counter++;
        this.setState({
            counter:counter
        });
    }

    handleDecrement(){
        let counter = this.state.counter;
        counter--;
        this.setState({
            counter: counter
        });

    }

    handleChange=(name, event)=> {
        this.setState({
            [name]: event.target.value
        })

    }

    handleAdd(){
        let counterValue = this.state.counter+ Number(this.state.addValue);
        this.setState({
            counter : counterValue,
            addValue : ''
        });

    }

    handleSubtract(){
        let counterValue = this.state.counter - Number(this.state.subtractValue);
        this.setState({
            counter : counterValue,
            subtractValue : ''
        });    
    }

        render(){
            return(
                <div>
                    <Button variant="contained" color="primary" onClick = {this.handleIncrement.bind(this)}>
                    INCREMENT
                    </Button>&nbsp;&nbsp;
                    <Button variant="contained" color="secondary"  onClick = {this.handleDecrement.bind(this)}>
                    DECREMENT
                    </Button>
                    <br/><br />

                    <TextField
                    id="number"
                    label="Number"
                    value={this.state.addValue}
                   onChange={this.handleChange.bind(this,'addValue')}
                    type="number"
                    /><br/><br/>
                    <Button variant="contained" color="secondary"  onClick = {this.handleAdd.bind(this)}>
                    ADD
                    </Button>
                    <br/>
                    <br/>

                    <TextField
                    id="number"
                    label="Number"
                    value={this.state.subtractValue}
                    onChange={this.handleChange.bind(this,'subtractValue')}
                    type="number"
                    /><br/><br/>
                    <Button variant="contained" color="secondary"  onClick = {this.handleSubtract.bind(this)}>
                    SUBTRACT
                    </Button>

                    <h3>Counter Value:</h3><label>{this.state.counter}</label>
                </div>
            );
        }
} 