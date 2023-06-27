import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DonutsHomepage from "./pages/DonutsHomepage";
import DonutsDashboard from "./pages/DonutsDashboard";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/donutapireact">Home</Link>

<Link to="/dashboard">Donut's Dashboard</Link> */}

        <Routes>
          <Route index element={ <DonutsHomepage /> }/>
          <Route path="/donutapireact" element={ <DonutsHomepage /> }/>
          <Route path="/dashboard" element={ <DonutsDashboard /> }/>
        </Routes>
    </BrowserRouter>
  );
}