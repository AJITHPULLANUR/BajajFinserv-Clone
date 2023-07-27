import "./App.css";
import "./Bajajlatest.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout1/Layout";
import Home from "./Components/Layout1/CONTENTS/Home";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
