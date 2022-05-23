import React from "react";
import clasess from './Form.module.scss'



const Background = (props) => {
    return (
        <div className={clasess['backgroundLogic']}>
            {props.children}
        </div>
    )
}

export default Background