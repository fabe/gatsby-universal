const defaultTransitionStyles = timeout => ({
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0,
  },
});

const addInitialStyle = style => {
  return {
    ...style,
    exited: style.entering,
  };
};

const getTransitionStyle = ({
  styles = defaultTransitionStyles,
  timeout,
  status,
}) => addInitialStyle(styles(timeout))[status];

export default getTransitionStyle;
