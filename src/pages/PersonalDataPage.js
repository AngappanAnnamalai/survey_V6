import PersonalDataContainer from "../components/PersonalDataContainer";
import styles from "./PersonalDataPage.module.css";
// import React from "react";

const PersonalDataPage = () => {

    // React.useEffect(()=> {
    //     const fetchData = async () => {
    //         const result = await fetch('/.netlify/functions/fetchNotion')
    //         result.json().then(json => {
    //             console.log(json.results);
    //         })
    //     }
    //     fetchData()
    // }, [])

  return (
    <div className={styles.personalDataPage} id="form-page">
      <PersonalDataContainer />
    </div>
  );
};

export default PersonalDataPage;
