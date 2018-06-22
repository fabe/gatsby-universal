import React from 'react';
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

    const noScriptClassName = makeClassName('noscript-');
    const transitionStyles = getTransitionStyle({
      styles: this.props.styles,
      status,
      timeout,
    });

    return (
      <ReactTransition {...transitionProps}>
        {status => (
          <>
            <div
              className={noScriptClassName}
              style={{
                ...transitionStyles,
              }}
            >
              {this.props.children}
            </div>

            <noscript
              dangerouslySetInnerHTML={{
                __html: `
                <style>
                  .${noScriptClassName} {
                    ${toFallbackStyleString(transitionStyles)}
                  }
                </style>
            `,
              }}
            />
          </>
        )}
      </ReactTransition>
    );
  }
}

export default Transition;
