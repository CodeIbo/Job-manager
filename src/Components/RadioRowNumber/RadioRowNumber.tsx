import CustomRadioGroupRowNumber from "./CustomRadioGroupRowNumber";
import { Radio } from "@mui/material";
import { RadioActiveNumber, RadioInactiveNumber } from "./RadioNumbers";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { PaginationNumberPerPage } from "../../State/Reducers/DataManager";
const RadioRowNumber = () => {
  const dispatch = useDispatch()
  const [radio,setRadio] = useState(3)

  useEffect(() => {
    dispatch(PaginationNumberPerPage(radio)) 
  }, [radio])
  const radioHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setRadio(Number(e.target.value))
  }
  return (
    <CustomRadioGroupRowNumber defaultValue={3} onChange={radioHandler}>
      <Radio
        icon={<RadioInactiveNumber>3</RadioInactiveNumber>}
        checkedIcon={<RadioActiveNumber>3</RadioActiveNumber>}
        value={3}
      />
      <Radio
        value={5}
        icon={<RadioInactiveNumber>5</RadioInactiveNumber>}
        checkedIcon={<RadioActiveNumber>5</RadioActiveNumber>}
      />
      <Radio
        value={7}
        icon={<RadioInactiveNumber>7</RadioInactiveNumber>}
        checkedIcon={<RadioActiveNumber>7</RadioActiveNumber>}
      />
      <Radio
        value={10}
        icon={<RadioInactiveNumber>10</RadioInactiveNumber>}
        checkedIcon={<RadioActiveNumber>10</RadioActiveNumber>}
      />
    </CustomRadioGroupRowNumber>
  );
};

export default RadioRowNumber;
