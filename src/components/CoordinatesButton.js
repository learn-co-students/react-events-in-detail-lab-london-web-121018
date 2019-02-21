// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleMouseCoordinates = e => {
        let x = e.clientX
        let y = e.clientY
        let xyarray = [x, y]
        this.props.onReceiveCoordinates(xyarray)
    }
    render() {
        return (
            <button onClick={this.handleMouseCoordinates}>

            </button>
        )
    }
}


