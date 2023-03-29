import { useCallback } from "react";
import FoodItemCard from "../components/FoodItemCard";
import { useNavigate } from "react-router-dom";
import styles from "./FoodMenuPage.module.css";
import React from "react";

const FoodMenuPage = () => {
  const navigate = useNavigate();

  const onBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const [foodItemData, setFoodItemData ] = React.useState({})

    React.useEffect(()=> {
        const fetchData = async () => {
            const result = await fetch('/.netlify/functions/fetchNotion')
            result.json().then(json => {
                setFoodItemData(json.results)
                console.log(json.results);
            })
        }
        fetchData()
    }, [])
    

  return (
    <main className={styles.foodMenuPage} id="main-page">
      <div className={styles.foodMenuContainer} id="food-menu-container">
            {Object.values(foodItemData).map(item => {
                return <FoodItemCard
                    key={item.properties.FoodID.number}
                    foodKind={item.properties.FoodKind.select.name}
                    foodTagText={item.properties.FoodTag.select.name}
                    foodTagColor={item.properties.FoodTagColor.formula.string}
                    foodTitle={item.properties.FoodTitle.title[0].plain_text}
                    foodRatingText={`${item.properties.RatingValue.number} (${item.properties.RatingCount.number} ratings)`}
                    foodPrice={`₹${item.properties.FoodPrice.number}`}
                    foodDescription={item.properties.FoodDescription.rich_text[0].plain_text}
                    foodImage={item.properties.FoodImage.url}
                    addButtonId="add-item-init"
                    addButtonCounterText="1"
                />})
            }
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
