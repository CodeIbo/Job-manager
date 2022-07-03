import { InputAdornment } from '@mui/material'
import { useEffect } from 'react'
import SearchField from './SearchField'
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../State/store';
import { inputFilterManager, searchData } from '../../State/Reducers/DataManager';



const SearchHandler = () => {
  const input = useSelector((state: RootState) => state.data)
  const dispatch = useDispatch();
  const filterHandler = (e: { target: { value: string; }; }) => {
    dispatch(inputFilterManager(e.target.value))
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchData())
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input.filterInput]);
  return (
    <SearchField hiddenLabel variant='filled' fullWidth InputProps={{ startAdornment: (<InputAdornment position='start'><SearchIcon fontSize='small' /></InputAdornment>) }} onChange={filterHandler} />
  );
}

export default SearchHandler;