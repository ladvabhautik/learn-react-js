import React from "react";

const Hello = () => {

    //with JSX Example
    return (
        <div>
            <h1 style={{
                color: "white",
                backgroundColor: "DodgerBlue",
                padding: "10px",
                fontFamily: "Arial"
            }}>
                Hello with JSX Example
            </h1>

            {/* <h1>React is {5 + 5} times better with JSX</h1> */}
        </div >
    )

    //without JSX Example
    // return (React.createElement('div', { id: 'hello', className: "bhautik" }, React.createElement('h1', null, 'Hello without JSX Example')))
}



export default Hello;