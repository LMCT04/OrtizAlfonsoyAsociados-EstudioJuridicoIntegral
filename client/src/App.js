import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, SubArea1, SubArea2, SubArea3, FormIndex } from "./components/views";
import NavBar from "./components/other/navegationBar/navegationBar";

function App() {
    const location = useLocation();

    const showNavBar =
        location.pathname === "/" ||
        location.pathname === "/consultaLaboral" ||
        location.pathname === "/consultaCivil" ||
        location.pathname === "/formsIndex" ||
        location.pathname === "/consultaPrevisional";

    return (
        <div className="App">
            {showNavBar && <NavBar/>}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/consultaLaboral" element={<SubArea1 />} />
                <Route exact path="/consultaCivil" element={<SubArea2 />} />
                <Route exact path="/consultaPrevisional" element={<SubArea3 />} />
                <Route exact path="/formsIndex" element={<FormIndex />} />
            </Routes>
        </div>
    );
}

export default App;
