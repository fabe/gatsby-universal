import React from 'react';
import styled from 'styled-components';

export default styled(({ tag = 'div', children, ...props }) =>
  React.createElement(tag, props, children)
);
