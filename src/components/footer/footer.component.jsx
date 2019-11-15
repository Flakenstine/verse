/* eslint-disable react/prefer-stateless-function */
import React from 'react'

import './footer.component.scss'

class Footer extends React.Component {

  constructor(props) {
      super(props);
      this.state = { apiResponse: false, div: "footerNotificationError"};
  }

  testConnection() {
      fetch("http://localhost:4001/testConnection")
          .then(res => res.text())
          .then(res => this.setState({div: "footerNotification"}))
          .catch(err => this.setState({div: "footerNotificationError"}));
      setInterval(() => {
        //console.log("hi");
        fetch("http://localhost:4001/testConnection")
            .then(res => res.text())
            .then(res => this.setState({div: "footerNotification"}))
            .catch(err => this.setState({div: "footerNotificationError"}));
      }, 1000);
  }

  componentDidMount() {
    this.testConnection();
  }

  render() {
    return (
      <div className={this.state.div}>
          <p>Failed to connect to API, please message <strong>Parker</strong></p>
      </div>
    )
  }
}

export default Footer
