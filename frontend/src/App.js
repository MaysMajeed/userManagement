import AdminPanel from "./pages/AdminPanel";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Navagation from "./components/Navagation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Logout from "./pages/Logout";

function App() {
  const user = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <Navagation />

      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        {user && <Route path="/adminPanel" element={<AdminPanel />}></Route>}
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {user ? (
          <Route path="/logout" element={<Logout />}></Route>
        ) : (
          <Route path="/login" element={<Login />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
