import React, {Component} from "react";
import {Button, Modal} from 'react-bootstrap';

class MsgBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      title: '',
      visible: false,
      isConfirmBox: false,
      confirmCallback: null
    };
  }

  alert(message, title) {
    this.setState({
      message,
      title,
      visible: true
    });
  }

  confirm(message, title, callback) {
    this.setState({
      message,
      title,
      visible: true,
      isConfirmBox: true,
      confirmCallback: callback
    });
  }

  close(confirm) {
    this.state.isConfirmBox && this.state.confirmCallback &&
      this.state.confirmCallback(confirm);

    this.setState({
      visible: false,
      isConfirmBox: false,
      confirmCallback: null
    }, this.props.onClose);
  }

  render() {
    return (
      <div className="msgbox-modal">
        <Modal onHide={this.close.bind(this)} show={this.state.visible}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.message}
          </Modal.Body>
          <Modal.Footer>
            {
              !this.state.isConfirmBox ? null :
              <Button bsStyle={this.props.cancelStyle} onClick={this.close.bind(this, false)}>
                {this.props.cancelText}
              </Button>
            }
            <Button bsStyle={this.props.okStyle} onClick={this.close.bind(this, true)}>
              {this.props.okText}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

MsgBox.propTypes = {
  okText: React.PropTypes.string,
  okStyle: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  cancelStyle: React.PropTypes.string,
  onClose: React.PropTypes.func
};

MsgBox.defaultProps = {
  okText: 'OK',
  okStyle: 'primary',
  cancelText: 'Cancel',
  cancelStyle: 'default'
};

export default MsgBox;
