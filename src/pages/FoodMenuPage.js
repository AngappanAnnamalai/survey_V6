import { useCallback } from "react";
import FoodItemCard from "../components/FoodItemCard";
import { useNavigate } from "react-router-dom";
import styles from "./FoodMenuPage.module.css";

const FoodMenuPage = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className={styles.foodMenuPage} id="main-page">
      <div className={styles.foodMenuContainer} id="food-menu-container">
        <FoodItemCard
          foodTagText="New"
          foodTitle="Chicken Seekh Kebab 6pc"
          foodRatingText="4.5 (145 ratings)"
          foodPrice="₹295"
          foodDescription="Served with mint chutney and salad. 6 Pieces, per box"
          foodImage="/foodimage@2x.jpg"
          addButtonId="add-item-init"
          addButtonCounterValue="1"
        />
        <button
          className={styles.backButton}
          id="back-button"
          onClick={onBackButtonClick}
        >
          <p className={styles.backButtonText} id="back-button-text">
            Back
          </p>
        </button>
      </div>
    </main>
  );
};

export default FoodMenuPage;
