import React, { Component } from 'react';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    visible: false,
    toggleModal: () => {
      this.setState({ visible: !this.state.visible });
    },
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;
