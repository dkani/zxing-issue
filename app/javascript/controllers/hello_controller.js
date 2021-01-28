import { Controller } from 'stimulus';
import { BrowserQRCodeReader } from '@zxing/browser';

export default class extends Controller {
  connect() {
    console.log("hello from StimulusJS")
    new BrowserQRCodeReader();
  }
}
