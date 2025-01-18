import { RestaurantCard } from "./RestaurantCard"
import { foodList } from "../utils/mockData"

export const Body = () => {
    return (
        <div className="body" >
            <div className="search">Search</div>
            <div className="res-container" >
                {
                    foodList.map((item) => (
                        <RestaurantCard key={item.idMeal} foodList={item} />
                    ))
                }
            </div>
        </div>
    )
}