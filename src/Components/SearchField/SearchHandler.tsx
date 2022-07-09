import { InputAdornment } from "@mui/material";
import { useEffect } from "react";
import SearchField from "./SearchField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../State/store";
import {
  inputFilterManager,
  searchData,
} from "../../State/Reducers/DataManager";
import { SearchFieldIcon } from "./searchRadioIcons";

const SearchHandler = () => {
  const input = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const filterHandler = (e: { target: { value: string } }) => {
    dispatch(inputFilterManager(e.target.value));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchData());
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input.filterInput]);
  return (
    <SearchField
      hiddenLabel
      variant="standard"
      autoComplete="off"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchFieldIcon color="defaultIcon" fontSize="medium" />
          </InputAdornment>
        ),
      }}
      onChange={filterHandler}
      placeholder='Search...'
    />
  );
};

export default SearchHandler;
