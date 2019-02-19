// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    createCoords = (event) => {
        let xCoords = event.screenX
        let yCoords = event.screenY
        const coords = [xCoords,yCoords]

        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return <button onClick={this.createCoords}></button>
    }
}

export default CoordinatesButton; 