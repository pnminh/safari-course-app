import React from 'react';
export default function Person(props){
    return(
        <div>
            <h1>This is a person page</h1>
            <h2>{props.children}</h2>
        </div>
    )
}