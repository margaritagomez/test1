import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';
import { TextNodeWidget } from '../nodes/textnode/TextNodeWidget';
import ec2Logo from '../../assets/node_icon_ec2.png'
import rdsLogo from '../../assets/node_icon_rds.png'
import elbLogo from '../../assets/node_icon_elb.png'

class Node extends React.Component {
    renderNode() {
        const { type, color } = this.props;
        if (type === 'textnode') {
            return <TextNodeWidget node={{ text: 'Text' }} displayOnly/>;
        }
        if (type === 'rds') {
            return <ImageNodeWidget node={{ name: 'RDS', icon: rdsLogo }} color={color} displayOnly/>;
        }
        if (type === 'ec2') {
            return <ImageNodeWidget node={{ name: 'EC2', icon: ec2Logo }} color={color} displayOnly/>;
        }
        if (type === 'elb') {
            return <ImageNodeWidget node={{ name: 'ELB', icon: elbLogo }} color={color} displayOnly/>;
        }
        if (type === 'imagenode') {
            return <ImageNodeWidget node={{ name: 'image', icon: '' }} color={color} icon={''} displayOnly/>;
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type, color } = this.props;

        return (
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;