import { useCallback } from "react";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./PersonalDataContainer.module.css";
import axios from "axios";

const PersonalDataContainer = () => {
  const navigate = useNavigate();

 const onSubmitButtonClick = (e) => {
    e.preventDefault()
    const userData = {
        test: 'react'
    }
    axios.post("https://eo58sbh4ytnfpvr.m.pipedream.net", userData).then((response) => {
        console.log(response.status, response.data.token)
    })
    useCallback(() => {
        navigate("/foodmenupage");
      }, [navigate]);
  }


  return (
    <div className={styles.personalDataContainer} id="form-container">
      <h2 className={styles.personalDetails} id="form-heading">
        Personal Details
      </h2>
      <TextField
        className={styles.name}
        color="primary"
        variant="outlined"
        type="text"
        label="Name"
        placeholder="Please Enter Full Name"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className={styles.name}
        color="primary"
        variant="outlined"
        type="email"
        label="Email Id"
        placeholder="Please Enter Valid Email ID"
        size="medium"
        margin="none"
        required
      />
      <TextField
        className={styles.name}
        color="primary"
        variant="outlined"
        type="text"
        label="Field 1"
        placeholder="Field 1 Data"
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.name}
        color="primary"
        variant="outlined"
        type="text"
        label="Field 2"
        placeholder="Field 2 Data"
        size="medium"
        margin="none"
      />
      <button
        className={styles.submitButton}
        id="submit-form"
        onClick={onSubmitButtonClick}
      >
        <div className={styles.submitButtonText}>Submit</div>
      </button>
    </div>
  );
};

export default PersonalDataContainer;
