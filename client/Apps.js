import React from "react";
import {
  render
} from "react-dom";

const APP = "app";
const COMPANY = "company"
class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      sort: false,
      appSort:false,
      companySort: false,
      appsList: ['WhatsApp: messages from all around the world', 'Instagram: images from all around the world', 'Youtube: videos from all around the world'],
      companyList: ['Microsoft: opening windows to the world', 'Apple: opening style for the world', ' Google: opening a world of ones and zeros']
    };

    this.onSelect = this.onSelect.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSelect() {
    this.setState({
      active: !this.state.active
    });
  }

  onClick(event, type) {
    console.log(event);
    console.log(type);

    type === APP ? (
      this.setState({
        appSort: !this.state.appSort
      }) &&
      !this.state.appSort ? this.setState({
        appsList: this.state.appsList.sort()
      }) : this.setState({
        appsList: this.state.appsList.reverse()
      })
      ) : (
      this.setState({
        companySort: !this.state.companySort
      }) &&
      !this.state.companySort ? this.setState({
        companyList: this.state.companyList.sort()
      }) : this.setState({
        companyList: this.state.companyList.reverse()
      })
    )

  }

  render() {
    return (
      <div>
        <div className = "apps-list" onClick = { this.onSelect } >
          <h1> {
            this.state.active ?
            this.props.apps.concat(" (Selected)") : this.props.apps
          } </h1>
          <button onClick={ event => { this.onClick(event, 'app') }}>sort</button>

          <ul>
            {this.state.appsList.map( item => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className = "apps-list" >
          <h1>{ this.props.companies }</h1>
          <button onClick={ event => { this.onClick(event) }}>sort</button>
          <ul>
          {this.state.companyList.map( item => (
            <li>{item}</li>
          ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Apps;
