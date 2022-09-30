import { Provider } from "react-redux";
import { Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { store } from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Link to="/">home</Link>
          <Link to="/Login">login</Link>
          <Link to="/Contact">contact</Link>

          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
