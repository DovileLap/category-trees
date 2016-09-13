import React from 'react';
import NewNodeControl from './NewNodeControl';

class Node extends React.Component {
    addChild(name) {
        this.props.addChild(this.props.data, name);
    }

    renderBranch(node) {
        let branch;
        if (node.children !== undefined && node.children.length > 0) {
            let childNodes = node.children.map(function(child, id) {
                return ( 
                    <Node key={ id } 
                        data={ child }
                        addChild={ this.props.addChild } 
                    /> 
                );
            }, this);
            branch = (
                <div className="tree-branch"> 
                    { childNodes } 
                </div> 
            );
        }
        return branch;
    }

    render() {
        let node = this.props.data;
        let branch = this.renderBranch(node);

        return (    
            <div className="tree-node"> 
                <div className="tree-cell">
                    { this.props.data.name } 
                    <NewNodeControl
                        onValue={ (value) => this.addChild(value) }
                    />
                </div>
                { branch }
            </div>
        );
    }
}

export default class RecursiveTree extends React.Component {

    render() {
        return (
            <div className="recursive-tree">
                <Node data={ this.props.data }
                      addChild = { this.props.addChild } />
            </div>
        );
    }
}


