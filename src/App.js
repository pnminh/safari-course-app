import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Animal from './Animal/Animal';
import Fruit from './Fruit/Fruit';
import { Button } from 'react-bootstrap';
class App extends Component {
  state = { theme: null }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    if (theme.toLowerCase() === 'reset') { theme = null }
    this.setState({ theme });
  }
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'default';
    
    const parentContainerStyles = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'table'
    };
    
    const subContainerStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      display: 'table-cell',
      verticalAlign: 'middle'
    };
    
    return (
      <div className="center-block text-center">
            <Button bsStyle="primary">Primary</Button>
          </div>
    );
    
  }
}

export default App;
