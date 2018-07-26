import React from 'react';
import styled from 'styled-components';

// This creates a tag-agnostic styled component.
// Use the same as a normal sc, but you're able to pass a `tag`
// string as props. Useful for changing <h1> etc. to <span>s
// depending on the context.
export default styled(({ tag = 'div', children, ...props }) =>
  React.createElement(tag, props, children)
);
