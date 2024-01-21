import "../styles/index.css";
import HomePage from "../pages/home";
import ServicesPage from "../pages/services";
import AboutPage from "../pages/about";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/signUp";
import ListPage from "../pages/listPage";
import RentPage from "../pages/rentNow";
import Properties from "./properties";
import ProfilePage from "../pages/profilePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/rent" element={<RentPage />} />
        <Route path="/properties/:id" element={<Properties />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
