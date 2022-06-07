import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import components
import App from "./App";
import Detail from "./Detail";
import Settings from "./Settings";

const appRoutes = (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<App />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/detail/:idData" element={<Detail />} />
            <Route path="*" element={<Navigate to="/"></Navigate>} />
        </Routes>
    </BrowserRouter>
);

export default appRoutes;