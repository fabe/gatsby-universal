import React, { Component } from 'react';

// TODO observe going out as well if needed at least

let io;
const listeners = [];

function getIO() {
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
                io.unobserve(l[0]);
                l[1]();
              }
            }
          });
        });
      },
      { rootMargin: `50px` }
    );
  }

  return io;
}

const listenToIntersections = (el, cb) => {
  getIO().observe(el);
  listeners.push([el, cb]);
};

export default class extends Component {
  constructor() {
    super();

    // If this browser doesn't support the IntersectionObserver API.
    let isVisible = true;
    let IOSupported = false;

    if (typeof window !== `undefined` && window.IntersectionObserver) {
      isVisible = false;
      IOSupported = true;
    }

    // Always not visible while server rendering,
    if (typeof window === `undefined`) {
      isVisible = false;
    }

    this.state = {
      isVisible,
      IOSupported,
    };
  }

  handleRef = ref => {
    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, () => {
        this.setState({ isVisible: true });
      });
    }
  };

  render() {
    console.log(this.state.isVisible);
    return <div ref={this.handleRef}>IO</div>;
  }
}
