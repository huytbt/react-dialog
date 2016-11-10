import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {MsgBox} from './components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  showAlert() {
    this.refs.msgbox.alert('Good luck to you!', 'Information');
  }

  showConfirm() {
    this.refs.msgbox.confirm('Are you sure to delete this?', 'Need Confirm', (confirm) => {
      this.setState({
        message: confirm ? 'You choose OK' : 'You choose Cancel'
      });
    });
  }

  render() {
    return (
      <div>
        <p>
          <button onClick={this.showAlert.bind(this)}>Show alert</button>
        </p>
        <p>
          <button onClick={this.showConfirm.bind(this)}>Show confirm</button>
          {this.state.message}
        </p>
        <MsgBox ref="msgbox"/>
      </div>
    );
  }
}

ReactDOM.render((
  <App/>
), document.getElementById('root'));
