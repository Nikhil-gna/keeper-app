import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/Signup";
// import { useEffect } from "react";
// import { auth } from "../firebase";

function App(){
  return(
    <div>
    {/* <Home/> */}
    {/* <Signup/> */}

    <BrowserRouter>
    <Routes>
      <Route index element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;