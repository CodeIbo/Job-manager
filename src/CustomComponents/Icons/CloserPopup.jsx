import React,{useContext} from "react";
import Context from "../../Context/DataContext";
import { styled } from "@mui/material/styles";
import CloseIcon from '@mui/icons-material/Close';


const CustomCloseIcon = styled(CloseIcon)({
    cursor: "pointer",
    color:'#FEF6F2',
    position: 'absolute',
    width: '1.5em',
    height: '1.5em',
    top:'0',
    right: '0',
    padding:'10px'

})


const CloserPopup = () =>{
    const localContext = useContext(Context)
    const closeHandler = () =>{
        localContext.setShowItem('')
    }

    return(
        <CustomCloseIcon onClick={closeHandler}/>
    )
}

export default CloserPopup
