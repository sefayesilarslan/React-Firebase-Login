import "./App.css";
import "./css/Navbar.css";
import "./css/Auth.css";
import RouterConfig from "./config/RouterConfig";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
