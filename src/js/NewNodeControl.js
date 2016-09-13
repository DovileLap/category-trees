import React from 'react';

export default class NewNodeControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: false
        };
        this.timeout = null;
    }

    showInput() {
        this.setState({
            input: true
        });
        this.timeout = setTimeout(() => this.hideInput(), 10000);
    }

    hideInput() {
        this.setState({
            input: false
        });
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }

    onInputChange(e) {
        if (e.keyCode == 13) { // Enter
            if (e.target.value) {
                this.props.onValue(e.target.value);
            }
            this.hideInput()
        }
    }

    render() {
        let input;
        if (this.state.input) {
            input = (
                <input type="text" 
                    placeholder="Node name" 
                    onKeyDown={ (e) => this.onInputChange(e) }
                />
            )
        }

        return (
            <div className="tree-control">
                <button title="Add child"
                    className="tree-control" 
                    onClick={ () => this.showInput() }>
                    +
                </button>
                { input }
            </div>
           
        )
    }
}