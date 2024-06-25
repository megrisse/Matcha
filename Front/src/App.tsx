import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Profile from "./profile/profile";

 function App() {
      
     return(

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </div>
     )
 }

 export default App;