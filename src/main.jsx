import React from "react";
//import ReactDOM from "react-dom/client"
import {createRoot} from "react-dom/client";

import { GifExperApp } from "./GifExperApp";

import "./styles.css"


createRoot(document.querySelector("#root"))
    .render(
        <React.StrictMode>
            <GifExperApp/>
        </React.StrictMode>
    )