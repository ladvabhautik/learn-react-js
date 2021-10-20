import React, { Component } from "react";

class Welcome extends Component {
    render() {
        // destructuringPropsState
        const { name, heroName } = this.props
        return (
            <>
                {/* <h1>Class Components {this.props.name} aka {this.props.heroName}</h1> */}
                {/* {this.props.children} */}
                <h1>Class Components {name} aka {heroName}</h1>
            </>
        )
    }
}

export default Welcome;