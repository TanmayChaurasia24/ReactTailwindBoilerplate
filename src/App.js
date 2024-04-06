import Signip from "./Signip";
import Login from "./Login";
import Profile from "./Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Work from "./Work";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signip />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
