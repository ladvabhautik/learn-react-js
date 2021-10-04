import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <>
                <h1>Class Components {this.props.name} aka {this.props.heroName}</h1>
                {this.props.children}
            </>
        )
    }
}

export default Welcome;