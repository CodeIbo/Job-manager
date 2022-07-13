import Background from "../Components/BackgroundPopup/Background";
import CloserPopup from "../Components/CloserPopupX/CloserHandler";
import { useState } from "react";
import BoxHelper from "./Components/BoxHelper";
import NextButtonHelper from "./Components/NextButtonHelper";
import PrevButtonHelper from "./Components/PrevButtonHelper";
import TextContentHelper from "./Components/TextContentHelper";
import TittleHelper from "./Components/TittleHelper";
import ImgHelper from "./Components/ImgHelper";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { helpObject } from "./mainHelperData";

const Helper: React.FC<{ helperData: helpObject[] }> = ({ helperData }) => {
  const [number, setNumber] = useState(0);

  const prevHandler = () => {
    setNumber(number - 1);
  };
  const nextHandler = () => {
    setNumber(number + 1);
  };
  return (
    <Background>
      <BoxHelper>
        <PrevButtonHelper onClick={prevHandler} disabled={number === 0}>
          <ArrowBackIosNewIcon />
        </PrevButtonHelper>
        <CloserPopup />
        <ImgHelper src={helperData[number].img} />
        <TittleHelper>{helperData[number].title}</TittleHelper>
        <TextContentHelper>{helperData[number].description}</TextContentHelper>
        <NextButtonHelper
          onClick={nextHandler}
          disabled={number === helperData.length - 1}
        >
          <ArrowForwardIosIcon />
        </NextButtonHelper>
      </BoxHelper>
    </Background>
  );
};

export default Helper;
