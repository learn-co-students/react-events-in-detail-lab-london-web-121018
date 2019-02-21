import React, { Component } from 'react';
export default class CoordinatesButton extends Component {

handleClick = (event) => {
  event.persist();
  this.props.onReceiveCoordinates([event.clientX, event.clientY])
}

  render() {
    return(
      <button onClick={this.handleClick}>Coordinate Button!</button>
    )
  }
}
