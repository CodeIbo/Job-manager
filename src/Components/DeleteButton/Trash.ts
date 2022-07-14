import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/system";

const Trash = styled(DeleteIcon)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.mainBoldAccent.main,
  height: "1.5em",
  width: "1.5em",
  margin: '0 5px',
  transition: 'background linear 0.2s',
  '&:hover': {
    background: 'whitesmoke',
    transition: 'background linear 0.5s'
  },
  [theme.breakpoints.down("md")]:{
    width: '1.2em',
    height: '1.2em',
} 
}));

export default Trash



