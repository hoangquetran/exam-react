import React, { Component } from "react";

class ExpandButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    expandButtonOpen = () => {
        this.setState({
            isExpand: true
        })
    };

    expandButtonClose = () => {
        this.setState({
            isExpand: false
        })
    };

    render() {
        const isExpand = this.state.isExpand;
        console.log(isExpand);
        const h1 = <h1>Conditional Rendering</h1>

        if(!isExpand) {
            return(
                <div>
                    {h1}
                    <button onClick={this.expandButtonOpen}>Click to open</button>
                </div>
            ) 
        }else {
            return(
                <div>
                    {h1}
                    <button onClick={this.expandButtonClose}>CLick to close</button>
                    <p>This is content.</p>
                </div>
            );
            
        }      
    }
}

export default ExpandButton;