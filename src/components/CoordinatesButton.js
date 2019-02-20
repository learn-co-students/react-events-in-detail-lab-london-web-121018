import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    coordinatesButtonListener = (e) =>{
        let coordsArray= [e.clientX, e.clientY]
        return this.props.onReceiveCoordinates(coordsArray)
    }
  
  render() {
    return (
      <button onClick={this.coordinatesButtonListener}>CoordinatesButton
      </button>
    )
  }
  
}
