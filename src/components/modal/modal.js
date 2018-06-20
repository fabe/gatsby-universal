import React from 'react';

const Modal = ({ visible, showModal, hideModal }) => (
  <div>
    <button onClick={showModal}>Show</button>
    <button onClick={hideModal}>Hide</button>

    {visible ? 'Visible' : 'Hidden'}
  </div>
);

export default Modal;
