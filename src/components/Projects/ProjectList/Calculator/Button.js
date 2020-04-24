import React from 'react';

export default function Button(props) {
    return <button className='buttonKey'
        onClick={props.onClick}>
        {props.value}
    </button>;
}