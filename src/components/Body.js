import { useState } from "react"
import { RestaurantCard } from "./RestaurantCard"
import { foodList } from "../utils/mockData"

export const Body = () => {
    const [foodListData, setFoodListData]=useState(foodList)
   
    return (
        <div className="body" >
            <div className="filter">
                <button
                className="filter-btn"
                onClick={()=>{
                    setFoodListData(foodListData.filter((food)=>food.rating>=4))
                }}
                >
                Top Rated Foods
                </button>
            </div>
            <div className="res-container" >
                {
                    foodListData.map((item) => (
                        <RestaurantCard key={item.id} foodList={item} />
                    ))
                }
            </div>
        </div>
    )
}