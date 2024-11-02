import React from 'react';
import './base/variables.css';
import './base/animations.css';
import { Startpage } from "./Startpage/Startpage";
import * as Settings from "./Startpage/Settings/settingsHandler";

const App = () => {
    // Apply colors dynamically from settings
    const root = document.documentElement;
    const colors = Settings.Design.getWithFallback().colors;
    Object.keys(colors).forEach(key => {
        root.style.setProperty(key, colors[key]);
    });

    return <Startpage />;
}

export default App;