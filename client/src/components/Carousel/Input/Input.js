import React from "react";
//import './Input.css'
import {Input, Button} from 'react-materialize';

const input = (props) =>   {
    return (
        <form onSubmit={props.onSubmit}>
            <Input 
            label={props.label} 
            placeholder={props.typeText} 
            value={props.value} 
            onChange={props.onChange} />

            <Button 
                type={props.typeButton} 
                name={props.nameButton}>
                submit
            </Button>
        </form>
    )     
 }
;
export default input;