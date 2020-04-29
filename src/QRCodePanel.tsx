import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';

var QRCode = require('qrcode.react');

export class QRCodePanel extends PureComponent<PanelProps> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <QRCode value={window.location.href} />
      </div>
    );
  }
}
