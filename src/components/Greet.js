import React from "react";

// function Greet() {
//     return <h1>Function Components without arrow function</h1>
// }


// function components
const Greet = (props) => {
    return (
        <>
            <h1>Function Components {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </>
    )
}

export default Greet