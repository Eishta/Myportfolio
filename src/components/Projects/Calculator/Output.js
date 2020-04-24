import React from 'react';

export default function Output(props) {
    return  <input type="text" className="result" name="answer" value={props.value} />;
  
}