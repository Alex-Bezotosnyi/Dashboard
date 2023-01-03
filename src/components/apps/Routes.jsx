import {Route, Routes} from "react-router-dom";
import Mount from "../pages/Mount/Mount";

export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<Mount/>} />
            <Route path="*" element={<Mount/>} />
        </Routes>
    )
}