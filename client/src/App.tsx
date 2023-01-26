import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./Context/context";

const App: React.FC = () => {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />{" "}
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default App;
