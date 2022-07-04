import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';




const EditTextField: React.FC<{ labelName?: string, onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, value: string, maxLenght: number, required: boolean,color:string }> = ({ labelName, onChange, value, maxLenght, required,color}) => {
    const textColorInput = {
        style: {
            color: "#fff",
            height: "50%",
            width: '80%'
        },
    };
    return (<TextField autoComplete='off' variant="outlined" label={labelName} InputLabelProps={textColorInput} onChange={onChange} inputProps={{ maxLength: maxLenght ,style:{color: color}}} required={required} value={value} />)
}


export default EditTextField