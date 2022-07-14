import { styled } from "@mui/system";
import { Box } from "@mui/material";
const BoxHelper = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "50vw",
    backgroundColor: theme.palette.mainBoldAccent.main,
    borderRadius: "10px",
    color: "white",
    fontSize: "1.3em",
    boxShadow: " 0px 1px 20px 3px rgba(255, 255, 255, 0.2);"

}));
export default BoxHelper;