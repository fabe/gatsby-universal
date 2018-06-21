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

const getTransitionStyle = ({
  styles = defaultTransitionStyles,
  timeout,
  status,
}) => styles(timeout)[status];

export default getTransitionStyle;
