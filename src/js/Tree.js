import React from 'react';

import { deepCopy } from './utils.js';

export default class Tree extends React.Component {
    constructor(props) {
        super(props);
        // This is our "model", hence should have it's own data
        this.data = deepCopy(props.data);
    }

    addChild(node, name) {
        let child = {
            name: name
        };
        if (node.children === undefined) {
            node.children = [];
        }
        node.children.push(child);
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, 
                    { data: this.data,
                      addChild: this.addChild.bind(this) }
                )}
            </div>
        );
    }
}