import React, { Component } from 'react';

 export default class DelayedButton extends Component {

    clickHandler = event => {
      event.persist();
      const callback = () => {this.props.onDelayedClick(event)};
      return setTimeout(callback, this.props.delay);
    }

    render() {
      return (
         <button onClick={this.clickHandler}>delay</button>
      )
   }

 }
