// Code CoordinatesButton Component Here
import React from "react";

export default class CoordinatesButton extends React.Component {
    
    coordinatesArray = (event) => {
        const logCoordinates = this.props.onReceiveCoordinates
        logCoordinates([event.clientX, event.clientY])
    };

    render () {
        return (
            <button onClick={this.coordinatesArray}></button>
        )
    };
} 