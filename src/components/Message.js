import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome to Sharepoint Empower"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thanks for visiting"
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()} >Subscribe</button>
            </>
        )
    }
}

export default Message;