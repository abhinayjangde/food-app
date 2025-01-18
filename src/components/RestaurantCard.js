// RestaurantCard
export const RestaurantCard = ({ foodList }) => {
    return (
        <div className="res-card">
            <img className="food-img" alt="pizza" src={foodList.img} />
            <h3>{foodList.foodName}</h3>
            <h4>{foodList.price} ₹</h4>
            <h4>{foodList.rating}</h4>
        </div>
    )
}