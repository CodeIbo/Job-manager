import { styled } from "@mui/system";

const SkillTag = styled("span")(({ theme }) => ({
    color: theme.palette.skillBox.contrastText,
    backgroundColor: theme.palette.skillBox.main,
    borderRadius: 5,
    padding: "0.3em",
    fontSize: "1.2em",
    fontFamily: "Averia Serif Libre",
    fontWeight: "400",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.1em"
    },
    [theme.breakpoints.down("lg")]:{
        wordBreak:'break-word'
    } 
}));
export default SkillTag;