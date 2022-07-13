import { styled } from "@mui/system";

const LinkWrapper = styled('a')(({ theme }) => ({
    all: 'unset',
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    "&:hover": {
        color: theme.palette.interactiveColor.main
    }
}));
export default LinkWrapper;