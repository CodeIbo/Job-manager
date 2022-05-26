import HelpIcon from "@mui/icons-material/Help";
import { styled } from "@mui/material/styles";

const HelpButton = styled(HelpIcon)({
  cursor: "pointer",
  color: "#5452AB",
  position: "fixed",
  right: "0",
  bottom: "0",
  width: "3em",
  height: "3em",
  margin: "20px",
});

export default HelpButton;
