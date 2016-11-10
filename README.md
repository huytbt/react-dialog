# React Dialog Component

[![Build Status](https://travis-ci.org/huytbt/react-dialog.svg?branch=master)](https://travis-ci.org/huytbt/react-dialog)
[![License](https://img.shields.io/github/license/huytbt/react-dialog.svg)](https://github.com/huytbt/react-dialog/master/LICENSE)

## Installation

```bash
npm install react-dialogs --save
```

## Usage

```js
import React, {Component} from 'react';
import {MsgBox} from 'react-dialogs';

class App extends Component {
  showAlert() {
    this.refs.msgbox.alert('Good luck to you!', 'Information');
  }

  showConfirm() {
    this.refs.msgbox.confirm('Are you sure to delete this?', 'Need Confirm', (confirm) => {
      alert(confirm ? 'You choose OK' : 'You choose Cancel');
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
```

You need add bootstrap css. Example use CDN

```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
```

## Props

Property|Type|Default|Description
---|---|---|---
okText|string|'OK'|Text of OK button
okStyle|string|'primary'|Style of OK button. Other values: success, info, warning, danger, link
cancelText|string|'Cancel'|Text of Cancel button
cancelStyle|string|'primary'|Style of Cancel button. Other values: success, info, warning, danger, link

## Developement

```bash
# Clone code
git clone https://github.com/huytbt/react-dialog.git

cd react-dialog

# Install packages
npm install

# Start dev server
npm start

# Testing
npm test

# Build
npm run build
```
