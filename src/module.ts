import { PanelPlugin } from '@grafana/data';
import { QRCodePanel } from './QRCodePanel';

export const plugin = new PanelPlugin(QRCodePanel);
