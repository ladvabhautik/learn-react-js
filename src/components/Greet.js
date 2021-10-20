import React from "react";

// function Greet() {
//     return <h1>Function Components without arrow function</h1>
// }


// function components
// const Greet = ({name,heroName}) => {
const Greet = (props) => {
    // destructuringPropsState
    const { name, heroName } = props
    return (
        <>
            {/* <h1>Function Components {props.name} a.k.a {props.heroName}</h1> */}
            {/* {props.children} */}

            <h1>Function Components {name} a.k.a {heroName}</h1>
        </>
    )
}

export default Greet