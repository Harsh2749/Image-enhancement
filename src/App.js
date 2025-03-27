import React from "react";
import ImageEnhancer from "./components/ImageEnhancer";
import "./styles/styles.css";

const App = () => {
    return (
        <div className="container">
            <h1>Image Enhancement Tool</h1>
            <ImageEnhancer />
        </div>
    );
};

export default App;
