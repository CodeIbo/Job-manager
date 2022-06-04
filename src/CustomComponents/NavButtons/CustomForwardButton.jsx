import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ButtonForward = ({ onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <ArrowForwardIosIcon />
    </Button>
  );
};

export default ButtonForward;
