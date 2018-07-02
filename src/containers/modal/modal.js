import React from 'react';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

export default props => (
  <Consumer>
    {({ visible, toggleModal }) => (
      <Modal visible={visible} toggleModal={toggleModal} />
    )}
  </Consumer>
);
