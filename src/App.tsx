import "./App.css";
import { Sidebar } from "./components/moleculs";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="w-full h-full relative flex justify-between">
        <Router>
          <Sidebar />
          <Routes />
        </Router>
      </div>
    </div>
  );
}

export default App;
