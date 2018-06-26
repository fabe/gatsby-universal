import React, { PureComponent } from 'react';
import { Dialog } from './modal.css';

export default class Modal extends PureComponent {
  render() {
    const { visible, showModal, hideModal } = this.props;
    return (
      <>
        <button onClick={showModal}>Show</button>
        <button onClick={hideModal}>Hide</button>

        <Dialog open={visible}>
          <video src="https://i.imgur.com/gzFqNSW.mp4" loop autoPlay muted />
        </Dialog>
      </>
    );
  }
}
