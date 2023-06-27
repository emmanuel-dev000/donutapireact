import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DonutsHomepage from "./pages/DonutsHomepage";
import DonutsDashboard from "./pages/DonutsDashboard";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={ <DonutsHomepage /> }/>
          <Route path="/donutapireact/home" element={ <DonutsHomepage /> }/>
          <Route path="/donutapireact/dashboard" element={ <DonutsDashboard /> }/>
        </Routes>
    </BrowserRouter>
  );
}