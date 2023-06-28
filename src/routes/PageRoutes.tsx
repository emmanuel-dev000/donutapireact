import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonutsHomepage from "../pages/DonutsHomepage";
import DonutsDashboard from "../pages/DonutsDashboard";

export default function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
            <Route index element={ <DonutsHomepage /> }/>
            <Route path="/donutapireact" element={ <DonutsHomepage /> }/>
            <Route path="/dashboard" element={ <DonutsDashboard /> }/>
            </Routes>
        </BrowserRouter>
    );
}