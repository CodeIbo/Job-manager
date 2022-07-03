import CounterContainer from "./CounterContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../State/store";
const Counter = () => {
  const count = useSelector((data:RootState) => data.data.filtreddata)
  return (
    <CounterContainer>
      <span>Actual number offers: {count.length} </span>
    </CounterContainer>
  );
};

export default Counter;
