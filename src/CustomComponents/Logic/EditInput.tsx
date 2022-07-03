import TextField from '@mui/material/TextField';
import { ChangeEventHandler } from 'react';




const EditTextField: React.FC<{ labelName: string, onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>, value: string, maxLenght: number, required: boolean }> = ({ labelName, onChange, value, maxLenght, required }) => {
    const textColorInput = {
        style: {
            color: "#fff",
            height: "50%",
        },
    };
    return (<TextField autoComplete='off' variant="outlined" label={labelName} InputLabelProps={textColorInput} onChange={onChange} inputProps={{ maxLength: maxLenght }} required={required} value={value} />)
}


export default EditTextField