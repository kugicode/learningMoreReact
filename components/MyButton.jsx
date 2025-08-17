import React from "react";

function MyButton(props){
 return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
 )   
}

export default MyButton;