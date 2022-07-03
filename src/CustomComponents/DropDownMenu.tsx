import classes from "../index.module.scss";

const DropDownMenu = ({onChange,initialValue}) => {

  return (
    <select onChange={onChange} value={initialValue} required>
      <option value="" disabled hidden>
        Choose here
      </option>
      <option value="sended" className={classes["sended"]}>
        Sended
      </option>
      <option value="offer" className={classes["offer"]}>
        Offer
      </option>
      <option value="canceled" className={classes["canceled"]}>
        Canceled
      </option>
      <option value="opened" className={classes["opened"]}>
        Opened
      </option>
    </select>
  );
};

export default DropDownMenu;
