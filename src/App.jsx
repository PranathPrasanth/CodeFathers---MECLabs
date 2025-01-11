import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Home from "./components/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Component for the main page
import GetStarted from "./components/GetStarted"; // Component for the "Get Started" page
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>

  );
}
export default App;
