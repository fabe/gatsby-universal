import React from 'react';
import PropTypes from 'prop-types';
import ReactTransition from 'react-transition-group/Transition';
import getTransitionStyle from 'helpers/getTransitionStyle';
import { timeout, historyExitingEventType } from 'constants/transition';
import makeClassName from 'helpers/makeClassName';
import toFallbackStyleString from 'helpers/toFallbackStyleString';

class Transition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event) {
    this.setState({ exiting: true });

    setTimeout(() => {
      this.setState({ exiting: false });
    }, timeout);
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
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

    const noScriptClassName = makeClassName('noscript-');

    return (
      <ReactTransition {...transitionProps}>
        {status => {
          return (
            <>
              <div
                style={getTransitionStyle({
                  styles: this.props.styles,
                  status,
                  timeout,
                })}
                className={noScriptClassName}
              >
                {this.props.children}
              </div>

              <noscript
                dangerouslySetInnerHTML={{
                  __html: `
                <style>
                  .${noScriptClassName} {
                    ${toFallbackStyleString(
                      getTransitionStyle({
                        styles: this.props.styles,
                        status: 'entered',
                        timeout,
                      })
                    )}
                  }
                </style>
            `,
                }}
              />
            </>
          );
        }}
      </ReactTransition>
    );
  }
}

Transition.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.func,
};

export default Transition;
