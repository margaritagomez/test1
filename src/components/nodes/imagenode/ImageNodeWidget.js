import React from 'react';
import * as RJD from '../../../../lib/main';
import { ImageNodeModel } from './ImageNodeModel';

export class ImageNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'transparent'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new ImageNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ImageNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    const { node, displayOnly, color: displayColor } = this.props;
    const { name, color, icon } = node;

    return (
      <div className='basic-node'>
        <div className='node-header'>
          {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
        </div>

        <div className='node-middle'>
          <div className='in'>{!displayOnly ? this.getInPort() : null}</div>
          
          <div className='node-icon'>
            <img className={'icon ' + name} src={icon}/>
          </div>
          
          <div className='out'>{!displayOnly ? this.getOutPort() : null}</div>
        </div>

        <div className='node-footer'>
          {name}
        </div>
      </div>
    );
  }
}

export const ImageNodeWidgetFactory = React.createFactory(ImageNodeWidget);
