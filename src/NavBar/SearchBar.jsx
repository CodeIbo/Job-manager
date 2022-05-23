import React, { useEffect, useState } from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Typography, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';
import clasess from './NavBar.module.scss'
import SearchIcon from '@mui/icons-material/Search';




const SearchBar = (props) => {

    const [radioCheck, setRadioCheck] = useState('companySite')
    const [inputCheck, setInputCheck] = useState('')


    const filterInformation = {
        radio: radioCheck,
        input: inputCheck
    }

    useEffect(() => {
        const identifier = setTimeout(() => {
            props.filter(filterInformation)
        }, 500)

        return () => {
            clearTimeout(identifier)
        }

    }, [inputCheck])

    const InputHandler = (e) => {
        setInputCheck(e.target.value)
    }


    const changeRadioHandler = (event) => {
        setRadioCheck(event.target.value)
    }

    const radioObject = {
        '& .MuiSvgIcon-root': {
            fontSize: '10px',
        },
    }

    return (
        <div className={clasess['righSiteNav']}>
            <TextField
                onChange={InputHandler}
                hiddenLabel
                variant="filled"
                size='small'
                fullWidth
                InputProps={{
                    style: {
                        fontSize: 10,
                        color: "white",
                        maxWidth: '350px',
                        alignSelf: 'center'
                    },
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    )
                }}
            />
            <RadioGroup onChange={changeRadioHandler} row value={radioCheck}>
                <FormControlLabel control={<Radio sx={radioObject} />} value='companySite' label={<Typography fontSize={'10px'}>Company Name</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='skills' label={<Typography fontSize={'10px'}>skills</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='link' label={<Typography fontSize={'10px'}>link</Typography>} />
                <FormControlLabel control={<Radio sx={radioObject} />} value='customDescription' label={<Typography fontSize={'10px'}>Custom comment</Typography>} />
            </RadioGroup>
        </div>
    )
}


export default SearchBar