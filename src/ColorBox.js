import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    let opacity = this.props.opacity
    return this.props.opacity >= 0.2 ? (
      <div className="color-box" style={{ opacity: opacity }}>
         <ColorBox opacity={opacity - 0.1}/>
      </div>
    ) : null
  }

}
