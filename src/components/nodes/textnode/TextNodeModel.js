import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class TextNodeModel extends RJD.NodeModel {
  constructor(text, content) {
    super('textnode');
    this.addPort(new RJD.DefaultPortModel(false, 'output', 'Out'));
    this.addPort(new RJD.DefaultPortModel(true, 'input', 'In'));
    this.text = text;
    this.content = content;
  }

  deSerialize(object) {
    super.deSerialize(object);
    this.text = object.text;
    this.content = object.content;
  }

  serialize() {
    return _.merge(super.serialize(), {
      text: this.text,
      content: this.content,
    });
  }

  getInPort() {
    return this.ports.input;
  }

  getOutPort() {
    return this.ports.output;
  }
}
