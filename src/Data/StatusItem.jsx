import React, { Fragment, useState, useEffect } from "react";
import clasess from './Data.module.scss'
import DropDownMenu from "../CustomComponents/DropDownMenu";

const StatusItem = (props) => {
    const [dropdown, setDropdown] = useState(false)
    const [changeStatusJobOnUI, setchangeStatusJobOnUI] = useState('')
    const clickHandler = () => {
        setDropdown(true)
    }
    useEffect(() => {
        console.log(changeStatusJobOnUI)
        const identifier = setTimeout(() => {
            if (changeStatusJobOnUI.length > 0) {
                const colorHandler = {
                    id: props.dataSI.id,
                    status: changeStatusJobOnUI
                }
                props.colorUp(colorHandler)
                setDropdown(false)
            }

        }, 1500)

        return () => {
            clearTimeout(identifier)
        }
    }, [changeStatusJobOnUI])



    return (
        <Fragment>
            <p onClick={clickHandler} className={clasess[`${props.dataSI.status}`]}></p>
            {dropdown && <DropDownMenu onChange={setchangeStatusJobOnUI} />}
        </Fragment>
    )
}

export default StatusItem