import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    //Main router that allows the routes to connect and work!
    <BrowserRouter>
    <div className="App">
      {/* Make sure there's only ONE route that show up at a time  */}
      <Routes>
        <Route path ="/dashboard" element = {<Dashboard/>} />
        <Route path = "/" element = {<Signin />}/>
        <Route path = "/signup" element = {<Signup/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
