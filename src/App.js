import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Recording from "./Components/Recording";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
        <BrowserRouter>
        <Routes>
          <Route index element={<Login/>} />
          <Route path="/recording" element={<Recording/>}/>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
