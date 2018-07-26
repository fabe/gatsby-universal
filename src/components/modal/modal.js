import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Button } from './modal.css';

// This component is here only to to showcase the
// React Context integration. There are probably a
// lot of much better Modal components available.
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
    }
  };

  disableScrolling(visible) {
    // TODO This is probably not good practice.
    // Putting it into the store sounds fishy as well, though.
    // Disables scrolling when the modal is open.
    if (visible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    const { children, visible, toggleModal } = this.props;

    if (typeof document !== `undefined`) {
      this.disableScrolling(visible);
    }

    return (
      <>
        <Button onClick={toggleModal}>Show Modal</Button>

        <Dialog
          aria-hidden={!visible}
          onClick={toggleModal}
          innerRef={modal => (this.modal = modal)}
        >
          {children}
        </Dialog>
      </>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func,
};
