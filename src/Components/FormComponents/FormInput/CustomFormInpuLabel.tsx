import React, { ChangeEventHandler, RefObject } from "react";
import FormInputLabel from "./FormInputLabel";
import { Box, TextField } from "@mui/material";

const CustomFormInpuLabel: React.FC<{
  labelName: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  maxLenght: number;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  width?: string;
}> = ({
  labelName,
  onChange,
  value,
  maxLenght,
  required = false,
  multiline = false,
  rows = 1,
  width = "100%",
}) => {
  return (
    <Box sx={{ width }}>
      <FormInputLabel>{labelName}</FormInputLabel>
      <TextField
        variant="outlined"
        autoComplete="off"
        onChange={onChange}
        value={value}
        inputProps={{ maxLength: maxLenght }}
        required={required}
        multiline={multiline}
        rows={rows}
        sx={{ width }}
      />
    </Box>
  );
};

export default CustomFormInpuLabel;
