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
      this.props.visible && this.props.toggleModal();
      this.modal.close();
    }
  };

  render() {
    const { visible, toggleModal } = this.props;
    if (this.modal && visible) {
      this.modal.showModal();
    } else if (this.modal && !visible) {
      this.modal.close();
    }

    return (
      <>
        <Button onClick={toggleModal}>Show Modal</Button>

        <Dialog
          open={visible}
          onClick={toggleModal}
          innerRef={modal => (this.modal = modal)}
        >
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Dialog>
      </>
    );
  }
}
