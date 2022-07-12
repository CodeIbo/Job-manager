import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { radioSetup } from "../../State/Reducers/DataManager";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  CommentIcon,
  TagIcon,
  LinkIcon,
  CompanyNameIcon,
} from "../Icons/Icons";

const RadioButtonsHandler = () => {
  const [radio, setRadio] = useState("companySite");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(radioSetup(radio));
  }, [radio]);

  return (
    <RadioGroup
      row
      onChange={(e) => setRadio(e.target.value)}
      defaultValue="companySite"
    >
      <Radio
        value="companySite"
        icon={<CompanyNameIcon color="defaultIcon" />}
        checkedIcon={<CompanyNameIcon color="interactiveColor" />}
      />
      <Radio
        value="skills"
        icon={<TagIcon color="defaultIcon" />}
        checkedIcon={<TagIcon color="interactiveColor" />}
      />
      <Radio
        value="link"
        icon={<LinkIcon color="defaultIcon" />}
        checkedIcon={<LinkIcon color="interactiveColor" />}
      />
      <Radio
        value="customDescription"
        icon={<CommentIcon color="defaultIcon" />}
        checkedIcon={<CommentIcon color="interactiveColor" />}
      />
    </RadioGroup>
  );
};

export default RadioButtonsHandler;
