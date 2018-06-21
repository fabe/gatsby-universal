import React from 'react';
import { Transition as ReactTransition } from 'react-transition-group';
import getTransitionStyle from 'helpers/getTransitionStyle';
import { timeout, historyExitingEventType } from 'constants/transition';

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event) {
    this.setState({ exiting: true });
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  static getDerivedStateFromProps({ exiting }) {
    if (exiting) {
      return { exiting: false };
    }
    return null;
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
    };

    return (
      <ReactTransition {...transitionProps}>
        {status => (
          <div
            style={{
              ...getTransitionStyle({
                styles: this.props.styles,
                status,
                timeout,
              }),
            }}
          >
            {this.props.children}
          </div>
        )}
      </ReactTransition>
    );
  }
}

export default Transition;
