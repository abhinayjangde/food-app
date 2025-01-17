import React, { useState } from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", { id: "heading" }, "Hello from React Parcel")

// Header Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" />
            </div>
            <div className="nav-items" >
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const foodList = [
    {
        "strMeal": "Baingan Bharta",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
        "idMeal": "52807"
    },
    {
        "strMeal": "Bread omelette",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
        "idMeal": "53076"
    },
    {
        "strMeal": "Chicken Handi",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
        "idMeal": "52795"
    },
    {
        "strMeal": "Dal fry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
        "idMeal": "52785"
    },
    {
        "strMeal": "Kidney Bean Curry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
        "idMeal": "52868"
    },
    {
        "strMeal": "Lamb Biryani",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        "idMeal": "52805"
    },
    {
        "strMeal": "Lamb Rogan josh",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/vvstvq1487342592.jpg",
        "idMeal": "52808"
    },
    {
        "strMeal": "Matar Paneer",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
        "idMeal": "52865"
    },
    {
        "strMeal": "Nutty Chicken Curry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg",
        "idMeal": "52851"
    },
    {
        "strMeal": "Recheado Masala Fish",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
        "idMeal": "52809"
    },
    {
        "strMeal": "Smoked Haddock Kedgeree",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1550441275.jpg",
        "idMeal": "52964"
    },
    {
        "strMeal": "Tandoori chicken",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
        "idMeal": "52806"
    }
]
// RestaurantCard
const RestaurantCard = ({ foodList }) => {
    console.log(foodList)
    return (
        <div className="res-card">
            <img className="food-img" alt="pizza" src={foodList.strMealThumb} />
            <h3>{foodList.strMeal}</h3>
            <h5>{foodList.idMeal}</h5>
        </div>
    )
}


// Body
const Body = () => {
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
// RootLayout
const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)