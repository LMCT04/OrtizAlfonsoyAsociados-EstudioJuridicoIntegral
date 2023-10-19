import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, SubArea1, SubArea2, SubArea3 } from "./components/views";
import NavBar from "./components/other/navegationBar/navegationBar";

function App() {
    const location = useLocation();

    const showNavBar =
        location.pathname === "/" ||
        location.pathname === "/subarea1" ||
        location.pathname === "/subarea2" ||
        location.pathname === "/subarea3";

    return (
        <div className="App">
            {showNavBar && <NavBar/>}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/subarea1" element={<SubArea1 />} />
                <Route exact path="/subarea2" element={<SubArea2 />} />
                <Route exact path="/subarea3" element={<SubArea3 />} />
            </Routes>
        </div>
    );
}

export default App;
