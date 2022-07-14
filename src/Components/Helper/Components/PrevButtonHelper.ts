import { styled } from "@mui/system";

const PrevButtonHelper = styled('button')(({ theme }) => ({
    all: "unset",
    cursor: "pointer",
    position: "absolute",
    left: "-5em",
    top: "50%"
}));
export default PrevButtonHelper;