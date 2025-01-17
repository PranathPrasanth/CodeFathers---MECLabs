import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Home from "./components/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Component for the main page
import GetStarted from "./components/GetStarted";
 // Component for the "Get Started" page
 import Login from "./components/Login";
import Signup from "./components/Signup";
import TwoComponent from "./components/TwoComponent";
import PersonalizedTest from "./components/personalizedtext";
import Prompt from "./components/promptpage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/twocomponent" element={<TwoComponent />} />
        <Route path="/personalized-test" element={<PersonalizedTest />} />
        <Route path="/other-feature" element={<Prompt />} />

      </Routes>
    </Router>

  );
}
export default App;
