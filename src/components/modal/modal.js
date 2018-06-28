import React, { PureComponent } from 'react';
import { Dialog, Button } from './modal.css';

export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  onEscape = ({ key }) => {
    if (key === 'Escape') {
      this.props.hideModal();
      this.modal.close();
    }
  };

  render() {
    const { visible, showModal, hideModal } = this.props;
    if (this.modal && visible) {
      this.modal.showModal();
    } else if (this.modal && !visible) {
      this.modal.close();
    }

    return (
      <>
        <Button onClick={showModal}>Show Modal</Button>

        <Dialog
          open={visible}
          onClick={hideModal}
          innerRef={modal => (this.modal = modal)}
        >
          <video src="https://i.imgur.com/gzFqNSW.mp4" loop autoPlay muted />
        </Dialog>
      </>
    );
  }
}
