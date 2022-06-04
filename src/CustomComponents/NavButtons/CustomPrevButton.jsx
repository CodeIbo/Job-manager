import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ButtonPrev = ({ onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      <ArrowBackIosIcon />
    </Button>
  );
};

export default ButtonPrev;
