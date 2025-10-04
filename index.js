import React from "react"
import ReactDOM from "react-dom/client"
import App from "./src/App"

const Title = () => (
    <h1>Title</h1>
    )

const HeadingComponent = () => ( 
    <div>
    <Title/>
    <h1>Functional Components</h1></div> 
    )

const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
    <App/>
);