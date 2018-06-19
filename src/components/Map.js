import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    let imagePath;
    imagePath = this.props.imagename ? 'images/' + this.props.imagename : 'images/none.png'
    return (
      <div className="MapBox">
        <img src={imagePath} alt={this.props.location} />
      </div>
    );
  }
}

export default Map;
