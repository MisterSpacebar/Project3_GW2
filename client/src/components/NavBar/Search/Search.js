import React from "react";
import {Input, Button} from 'react-materialize';

const search = (props) => (
    
        <form onSubmit={props.onSubmit}>
        <Input placeholder={props.typeText} label={props.nameInput} value={props.value} 
        onChange={props.onChange} />
        <Button type={props.typeButton} name={props.nameButton}>submit</Button>
        </form>
        
 

);
export default search;