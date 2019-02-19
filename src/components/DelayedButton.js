import React, { Component } from 'react';

export default class DelayedButton extends Component {

   clickHandler = event => {
      event.persist();
      const cb = () => {this.props.onDelayedClick(event)};
      return setTimeout(cb, this.props.delay);
   }

   render() {
      return (
         <button onClick={this.clickHandler}>Delay Log</button>
      )
   }

}
