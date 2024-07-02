import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Profile from "./profile/profile";
import Chat from "./Chat/Chat";

 function App() {
      
     return(

      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/Chat" element={<Chat />}/>
          </Routes>
        </BrowserRouter>
      </div>
     )
 }

 export default App;