import React, { Component } from 'react';

let io;
const listeners = [];

function getIO(rootMargin = `-50px`) {
  if (
    typeof io === `undefined` &&
    typeof window !== `undefined` &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          listeners.forEach(l => {
            if (l[0] === entry.target) {
              // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                // io.unobserve(l[0]);
                l[1](true);
              } else if (
                !entry.isIntersecting ||
                entry.intersectionRatio <= 0
              ) {
                l[1](false);
              }
            }
          });
        });
      },
      { rootMargin }
    );
  }

  return io;
}

const listenToIntersections = (el, cb, rm) => {
  getIO(rm).observe(el);
  listeners.push([el, cb]);
};

export default class extends Component {
  constructor() {
    super();

    // If this browser doesn't support the IntersectionObserver API.
    let isVisible = true;
    let hasBeenVisible = true;
    let IOSupported = false;

    if (typeof window !== `undefined` && window.IntersectionObserver) {
      isVisible = false;
      hasBeenVisible = false;
      IOSupported = true;
    }

    // Always not visible while server rendering,
    if (typeof window === `undefined`) {
      isVisible = false;
      hasBeenVisible = false;
    }

    this.state = {
      isVisible,
      hasBeenVisible,
      IOSupported,
    };
  }

  handleRef = ref => {
    if (this.state.IOSupported && ref) {
      listenToIntersections(
        ref,
        isVisible => {
          this.setState(state => {
            let newState = {};

            if (!state.hasBeenVisible && isVisible) {
              newState = { hasBeenVisible: true };
            }

            return { isVisible, ...newState };
          });
        },
        this.props.rootMargin
      );
    }
  };

  render() {
    const { isVisible, hasBeenVisible } = this.state;

    return (
      <div ref={this.handleRef}>
        {this.props.children({ isVisible, hasBeenVisible })}
      </div>
    );
  }
}
