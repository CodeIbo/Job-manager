import { styled } from "@mui/system";

const SkillTag = styled("span")(({theme}) => ({
    color: theme.palette.skillBox.contrastText,
    backgroundColor: theme.palette.skillBox.main,
    borderRadius:5,
    padding: "0.3em",
    fontSize: "1.2em",
    fontFamily: "Averia Serif Libre"
}));
export default SkillTag;