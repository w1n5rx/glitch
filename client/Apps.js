import React from "react";
import {
  render
} from "react-dom";

class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div>
      <div className = "apps-list"
        onClick = {
          this.onSelect
        } >
        <h1> {
          this.state.active ?
          this.props.header.concat(" (Selected)") : this.props.header
        } < /h1>

        <ul>
          <li> WhatsApp: messages from all around the world < /li>
          <li> Instagram: images from all around the world </li>
          <li> Youtube: videos from all around the world </li>
        </ul>
      </div>
      <div className = "apps-list" >
        <h1>Thing List for Companies </h1>
        <ul>
        <li> Microsoft: opening windows to the world </li>
        <li> Apple: opening style for the world </li>
        <li> Google: opening a world of ones and zeros </li>
        </ul>
      </div>
      </div>
    );
  }
}
export default Apps;
