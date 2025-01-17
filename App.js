import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1", { id: "heading" }, "Hello from React Parcel")

// Header Component
const Header = ()=>{
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

// RestaurantCard
const RestaurantCard = ()=>{
    return (
        <div className="res-card">
            <img className="food-img" alt="pizza" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/12/18/35139b49-285b-4b15-ae85-94c910ff612c_69cb0003-937e-49d0-a21a-5b46ec2dd500.jpg_compressed" />
            <h3>The Wood Fired Pizzeria</h3>
            <h5>4.4 (695 ratings)</h5>
            <h5>₹300 for two</h5>
        </div>
    )
}
// Body
const Body = ()=>{
    return (
        <div className="body" >
            <div className="search">Search Bar</div>
            <div className="res-container" >
                {/* TODO : Restaurant Cart   */}
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}
// RootLayout
const App = ()=>{
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)