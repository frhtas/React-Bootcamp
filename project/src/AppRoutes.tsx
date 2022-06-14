import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./appRedux/ReduxStore";

// import components
import Login from "./Login";
import Dashboard from "./Dashboard";
import Security from "./Security";
import Settings from "./Settings";

export const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Login />} />
                <Route path="/dashboard" element={<Security component={<Dashboard />} />} />
                <Route path="/settings" element={<Security component={<Settings />} />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
