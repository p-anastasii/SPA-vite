import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const themes = {
        light: {
            background: "white",
            color: "black",
        },
        dark: {
            background: "black",
            color: 'white',
        },
    };

    return (
        <div style={{ ...(darkTheme ? themes.dark : themes.light), height: "100%", width: "100%"}}>
            <Header />
            <button onClick={changeTheme}>
                {darkTheme ? "Cвітла тема" : "Темна тема"}
            </button>
            <ErrorBoundary>
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/about"} element={<About />} />
                    <Route path={"/contacts"} element={<Contacts />} />
                </Routes>
            </ErrorBoundary>
        </div>
    );
};
export default App
