import React, { useState, useEffect } from "react";
import classes from './DropDownMenu.module.scss'

const DropDownMenu = (props) => {
    const [status, setStatus] = useState('')

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    useEffect(() => {
        props.onChange(status);
    }, [status])



    return (
        <select onChange={statusHandler} value={status} required>
            <option value="" disabled hidden>Choose here</option>
            <option value='sended' className={classes['sended']}>Sended</option>
            <option value='offer' className={classes['offer']}>Offer</option>
            <option value='canceled' className={classes['canceled']}> Canceled</option>
            <option value='opened' className={classes['opened']}>Opened</option>
        </select>
    )
}

export default DropDownMenu