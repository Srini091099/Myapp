import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Mainpage } from "../pages/mainpage";
import { Loginpage } from "../pages/Loginpage";
import { Homepage2 } from "../pages/homrpages";
import { Productpage } from "../pages/homepages";
import { Offerpage } from "../insidepages/offerpage";

export function Routesheader() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Login" element={<Loginpage/>} />
        <Route path="/home" element={<Homepage2/>} />
        <Route path="/product/:id" element={<Productpage />} />

        <Route path="/offer" element={<Offerpage/>} />
        <Route path="/listing-details-v1/:id" />
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}
