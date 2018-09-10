import React from 'react';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

export default ({ children }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal
        open={open}
        showModal={showModal}
        hideModal={hideModal}
        children={children}
      />
    )}
  </Consumer>
);
