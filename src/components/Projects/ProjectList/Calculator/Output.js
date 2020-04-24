import React from 'react';

export default function Output(props) {
    return <button className='buttonKey'>
        {props.value}
    </button>;
}