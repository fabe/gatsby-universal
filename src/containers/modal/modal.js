import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from 'actions/modalActions';
import { getModalStatus } from 'selectors/modalSelectors';
import Modal from 'components/modal';

const ModalContainer = props => <Modal {...props} />;

const mapStateToProps = state => ({
  visible: getModalStatus(state),
});

export default connect(
  mapStateToProps,
  modalActions
)(ModalContainer);
