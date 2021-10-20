import React from 'react'

function ChildComponent(props) {
    const { greetHandler } = props
    return (
        <div>
            <button onClick={() => greetHandler('Child')}>Click Me</button>
        </div>
    )
}

export default ChildComponent
