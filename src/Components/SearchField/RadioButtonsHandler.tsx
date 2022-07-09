import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { radioSetup } from "../../State/Reducers/DataManager";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { CommentIcon, TagIcon, LinkIcon,CompanyNameIcon } from "./searchRadioIcons";


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
      <FormControlLabel
        value="companySite"
        control={
          <Radio
            icon={<CompanyNameIcon color="defaultIcon" />}
            checkedIcon={<CompanyNameIcon color="interactiveColor" />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="skills"
        control={
          <Radio
            icon={<TagIcon color="defaultIcon" />}
            checkedIcon={<TagIcon color="interactiveColor" />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="link"
        control={
          <Radio
            icon={<LinkIcon color="defaultIcon" />}
            checkedIcon={<LinkIcon color="interactiveColor" />}
          />
        }
        label=""
      />
      <FormControlLabel
        value="customDescription"
        control={
          <Radio
            icon={<CommentIcon color="defaultIcon" />}
            checkedIcon={<CommentIcon color="interactiveColor" />}
          />
        }
        label=""
      />
    </RadioGroup>
  );
};

export default RadioButtonsHandler;
