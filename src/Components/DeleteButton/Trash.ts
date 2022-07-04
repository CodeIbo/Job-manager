import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";

const Trash = styled(DeleteIcon)({
  width: '1.3em',
  height: '1.3em',
  cursor: "pointer",
  color: "#5452AB",
  padding: '10px',
  margin: '0 5px',
  transition: 'background linear 0.2s',
  '&:hover': {
    background: 'whitesmoke',
    transition: 'background linear 0.5s'
  }
});

export default Trash



