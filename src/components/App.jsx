import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/Signup";


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