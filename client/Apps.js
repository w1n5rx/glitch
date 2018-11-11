import React from 'react';
import { render } from 'react-dom';

class Apps extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      active: false
    }
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.setState({active: !this.state.active})
  }
  
  render() {
    return (
      <div className="apps-list" onClick={this.onSelect}>
      
        <h1>{this.state.active ? this.props.header.concat(' (Selected)') :this.props.header}</h1>
          
        <ul>
          <li>WhatsApp: messages from all around the world</li>
          <li>Instagram: images from all around the world</li>
          <li>Youtube: videos from all around the world</li>
        </ul>
      </div>
    );
  }
}
export default Apps;