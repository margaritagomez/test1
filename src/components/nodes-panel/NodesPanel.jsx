import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className='node-wrapper'>
                        <Node type='textnode' />
                    </div>
                    <hr />
                    <div className='node-wrapper'>
                        <Node type='rds' />
                    </div>
                    <div className='node-wrapper'>
                        <Node type='ec2' />
                    </div>
                    <div className='node-wrapper'>
                        <Node type='elb' />
                    </div>
                    {/* Other nodes */}
                </div>
            </div>
        );
    }
}

export default NodesPanel;