import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header"
import { Body } from "./components/Body"

// const heading = React.createElement("h1", { id: "heading" }, "Hello from React Parcel")

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