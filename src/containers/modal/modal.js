import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from 'store/createContext';
import Modal from 'components/modal';

const ModalContainer = ({ children }) => (
  <Consumer>
    {({ open, showModal, hideModal }) => (
      <Modal open={open} showModal={showModal} hideModal={hideModal}>
        {children}
      </Modal>
    )}
  </Consumer>
);

ModalContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContainer;
