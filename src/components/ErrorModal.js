import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ErrModal extends Component  {
	render(){
		return (
			<Modal 
				centered={true} 
				isOpen={this.props.isModalOpen} 
				toggle={this.props.toggleModal} 
				style={{"width": "325px"}}
				className={this.props.className}>
				<ModalHeader toggle={this.props.toggleModal}>{this.props.modalTitle}
				</ModalHeader>
		            <ModalBody>{this.props.modalMess}</ModalBody>
			</Modal>
		)
	}
}

export default ErrModal;