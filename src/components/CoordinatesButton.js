// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    sendCoordinates = (event) => {
        // console.log(event.clientY,event.clientX)
        const xAndY = [event.clientX,event.clientY]
        // console.log(xAndY)
        this.props.onReceiveCoordinates(xAndY)
    }

    render(){
        return(
            <button
            onClick={this.sendCoordinates}
            >
            Get
            </button>
        )
    }
}