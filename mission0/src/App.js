import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Font from "./components/Font"
import Chatbot from "./components/Chatbot"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Font />} />
          <Route path="/contact" element={<Chatbot/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
