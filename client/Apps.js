import React from "react";
import {
  render
} from "react-dom";

const APP = "app";
class Apps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      activeCompanies: false,
      appSort:false,
      companySort: false,
      appsList: [
        'WhatsApp: messages from all around the world',
        'Instagram: images from all around the world',
        'Youtube: videos from all around the world',
        'Dropbox: files from all around the world'
      ],
      companyList: [
        'Microsoft: opening windows to the world',
        'Apple: opening style for the world',
        ' Google: opening a world of ones and zeros'
      ],
      clickedItem: '',
      clickedItemVisible: false
    };

    this.onSelect = this.onSelect.bind(this);
    this.onSelectCompanies = this.onSelectCompanies.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onClickVisibility = this.onClickVisibility.bind(this);
  }

  onSelect() {
    this.setState({
      active: !this.state.active,
      activeCompanies: false
    });
  }


  onSelectCompanies() {
    this.setState({
      activeCompanies: !this.state.activeCompanies,
      active: false,
      clickedItemVisible: false,
    });
  }

  onClick(event, type) {
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

  onClickVisibility(value) {
    this.setState({
      clickedItem: value,
      clickedItemVisible: true,
      active: true,
      activeCompanies: false
    });
  }

  componentWillUnmount() {
    this.setState({
      clickedItem: '',
      clickedItemVisible: false,
      active: false,
      activeCompanies: false,
      appSort:false,
      companySort: false,
    });
  }

  render() {
    return (
      <div>
        <h3 className = "headline">{this.state.clickedItemVisible && this.state.clickedItem}</h3>
        <div className = "apps-list" onClick = { this.onSelect } >
          <h1> {
            this.state.active ?
            this.props.apps.concat(" (Selected)") : this.props.apps
          } </h1>
          <button onClick={ event => { this.onClick(event, 'app') }}>sort</button>

          <ul>
            {this.state.appsList.map( item => (
              <li onClick={event => { this.onClickVisibility(item) }}>{item}</li>
            ))}
          </ul>
        </div>
        <div className = "apps-list" onClick = { this.onSelectCompanies } >
          <h1>{
            this.state.activeCompanies ?
            this.props.companies.concat(" (Selected)") : this.props.companies
          }</h1>
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
