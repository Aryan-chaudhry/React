import React from 'react'

const Child = React.memo((props) => {
    console.log("Child component get rerender again")
    return (
        <div>
        <button>
            {props.buttonName}
            {/* {props.handleClick()} */}
        </button>
        </div>
    )}
)


export default Child;

// react.memo --> wrap --> component --> component rerender tabhi hoge
// jab prps chnage honge nahi to re-render nahi hoga
// if you are using function , than use memo dont help you to rerendering
