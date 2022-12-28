import React from "react";
import ReactDOM  from "react-dom/client";
import { ExampleComponent } from "./components/ExampleComponent";
import { GifExpertApp } from "./GifExpertApp";

import './index.css'

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
    <>
        <ExampleComponent />   {/* Llamamos al componente principal  */}    
    </>
)