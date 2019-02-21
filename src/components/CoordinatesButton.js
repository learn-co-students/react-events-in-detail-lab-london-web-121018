// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  handleClick = (event) => {
    return (
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
    )
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }


}


export default CoordinatesButton;
