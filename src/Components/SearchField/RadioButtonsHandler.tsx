import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { radioSetup } from "../../State/Reducers/DataManager";
import { useDispatch } from "react-redux";
import  {useState,useEffect} from "react";

const RadioButtonsHandler = () => {
    const [radio,setRadio] =useState('companySite')
    const dispatch = useDispatch()
    useEffect(() =>{
      dispatch(radioSetup(radio))
    }, [radio])
  



    return (
        <RadioGroup row onChange={(e) => setRadio(e.target.value)} defaultValue='companySite'>
            <FormControlLabel
                value="companySite"
                control={<Radio />}
                label="Company"
            />
            <FormControlLabel value="skills" control={<Radio />} label="Skills" />
            <FormControlLabel value="link" control={<Radio />} label="link" />
            <FormControlLabel
                value="customDescription"
                control={<Radio />}
                label="Description"
            />
        </RadioGroup>
    );
};

export default RadioButtonsHandler;
