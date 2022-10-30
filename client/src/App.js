import './App.css';
import NavBar from './components/Navbar';
import "./App.css"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home  from './components/screens/Home';
import Signin  from './components/screens/Login';
import Signup  from './components/screens/Signup';
import Profile  from './components/screens/Profile';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path = "/" element={<Home />} /> 
        <Route path = "/signin" element={<Signin />} />
        <Route path = "/signup" element={<Signup />} />
        <Route path = "/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
