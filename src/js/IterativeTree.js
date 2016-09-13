import React from 'react';
import NewNodeControl from './NewNodeControl';

class Node extends React.Component {
    addChild(name) {
        this.props.addChild(this.props.node, name);
    }

    render() {
        let style = {
            marginLeft: (this.props.depthMargin * this.props.depth) + 'px' 
        }
        return (
            <div style= { style } className="tree-cell">
                { this.props.node.name }
                <NewNodeControl
                    onValue={ (value) => this.addChild(value) }
                />
            </div>
        )
    }
}


export default class IterativeTree extends React.Component {

    renderNodes(data) {
        let stack = [];
        let currentNode;
        let renderedNodes = [];
        let cnt = 0;
        stack.push({
            depth: 0,
            node: data
        });
        while (stack.length > 0) {
            currentNode = stack.pop();
            renderedNodes.push( ( 
                <Node key={ cnt++ } 
                      depth={ currentNode.depth } 
                      node={ currentNode.node }
                      addChild={ this.props.addChild } 
                      depthMargin={ this.props.depthMargin }>
                </Node>) );
            let children = currentNode.node.children;
            if (children !== undefined && children.length > 0) {
                children.slice().reverse().forEach(function(node) {
                    stack.push({
                        depth: currentNode.depth + 1,
                        node: node
                    });
                });
            }
        } 

        return renderedNodes;
    }

    render() {
        let nodes = this.renderNodes(this.props.data);

        return (
            <div className="iterative-tree">
                { nodes }
            </div>
        );
    }
}