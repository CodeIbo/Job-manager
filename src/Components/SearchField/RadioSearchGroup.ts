import { styled } from "@mui/system";
import { RadioGroup } from "@mui/material";

const RadioSearchGroup = styled(RadioGroup)(({theme})=>({
    [theme.breakpoints.down("sm")]: {
        margin:"0 auto"
    }
}));
export default RadioSearchGroup;