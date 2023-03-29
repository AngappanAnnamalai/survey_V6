import PersonalDataContainer from "../components/PersonalDataContainer";
import styles from "./PersonalDataPage.module.css";

const PersonalDataPage = () => {
  return (
    <div className={styles.personalDataPage} id="form-page">
      <PersonalDataContainer />
    </div>
  );
};

export default PersonalDataPage;
