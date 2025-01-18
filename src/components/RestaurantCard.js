// RestaurantCard
export const RestaurantCard = ({ foodList }) => {
    return (
        <div className="res-card">
            <img className="food-img" alt="pizza" src={foodList.strMealThumb} />
            <h3>{foodList.strMeal}</h3>
            <h5>{foodList.idMeal}</h5>
        </div>
    )
}