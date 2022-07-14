import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { styled } from '@mui/system';

const HelpButton = styled(HelpOutlineOutlinedIcon)(({theme}) => ({
  cursor: "pointer",
  color: theme.palette.mainBoldAccent.main,
  fontSize: '3em'

}));
export default HelpButton;
