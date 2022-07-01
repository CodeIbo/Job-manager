import React, { useState, useContext, useEffect } from "react";
import Background from "../CustomComponents/Background/Background";
import TextField from "@mui/material/TextField";
import DropDownMenu from "../CustomComponents/DropDownMenu";
import CustomButtonSubmit from "../CustomComponents/CustomSubmitButton";
import Context from "../Context/DataContext";
import "./Form.module.scss";
import CloserPopup from "../CustomComponents/Style/Icons/CustomCloseIcon";
import AlertFrom from "../CustomComponents/AlertForm";

const Form = () => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState([]);
  const [link, setLink] = useState("");
  const [customDescription, setcustomDescription] = useState("");
  const [jobStatut, setJobStatus] = useState("");
  const [validateSkills, setValidateSkills] = useState(true);
  const localDataContext = useContext(Context);
  const NameHandler = (e) => {
    setName(e.target.value);
  };

  const skillHandler = (e) => {
    const newItems = e.target.value.trim().split(",");
    setSkills(newItems);
  };

  useEffect(() => {
    const timefunction = setTimeout(() => {
      setValidateSkills(!skills.some((item) => item.length === 0));
    }, 500);
    return () => {
      clearTimeout(timefunction);
    };
  }, [skills]);

  const LinkHandler = (e) => {
    setLink(e.target.value.trim());
  };

  const customDescriptionHandler = (e) => {
    setcustomDescription(e.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (validateSkills) {
      const job = {
        id: Date.now(),
        companySite: name,
        skills: skills,
        link: link,
        customDescription: customDescription,
        status: jobStatut,
      };

      localDataContext.setLocalData((prevData) => [job, ...prevData]);

      setName("");
      setSkills("");
      setLink("");
      setcustomDescription("");
      localDataContext.setShowItem("");
    }
  };

  const textColorInput = {
    style: {
      color: "#fff",
      height: "50%",
    },
  };

  return (
    <Background>
      {!validateSkills && (
        <AlertFrom severity="warning">
          Remember! You cant have empty space after and before comma.
        </AlertFrom>
      )}
      <form onSubmit={submitForm}>
        <CloserPopup />
        <TextField
          autoComplete="off"
          variant="outlined"
          label="Company name"
          value={name}
          onChange={NameHandler}
          InputLabelProps={textColorInput}
          required
          inputProps={{
            maxLength: 25,
            style: {
              color: "whitesmoke",
            },
          }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="Skills"
          InputLabelProps={textColorInput}
          value={skills}
          onChange={skillHandler}
          required
          inputProps={{
            maxLength: 100,
            style: {
              color: "whitesmoke",
            },
          }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="link"
          InputLabelProps={textColorInput}
          value={link}
          onChange={LinkHandler}
          required
          inputProps={{
            maxLength: 150,
            style: {
              color: "whitesmoke",
            },
          }}
        ></TextField>
        <TextField
          autoComplete="off"
          variant="outlined"
          label="custom comment"
          InputLabelProps={textColorInput}
          value={customDescription}
          onChange={customDescriptionHandler}
          inputProps={{
            maxLength: 150,
            style: {
              color: "whitesmoke",
            },
          }}
        ></TextField>
        <DropDownMenu onChange={setJobStatus} />
        <CustomButtonSubmit type="submit" variant="contained">
          Send
        </CustomButtonSubmit>
      </form>
    </Background>
  );
};

export default Form;
