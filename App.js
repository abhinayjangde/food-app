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

// RootLayout
const App = ()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)