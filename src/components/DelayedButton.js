// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    // cb = this.props.onDelayedClick()
    // delay = this.props.delay

    handleDelay = e => {

        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleDelay}>
            </button>
        )
    }
}