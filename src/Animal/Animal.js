import React from 'react';
const animal = (props) => {
    return React.createElement('h1', null, `This is the ${props.name} page`)
}
export default animal;