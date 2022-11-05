import React from 'react'
import { useEffect, createContext, useReducer, useContext } from 'react'
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home  from './components/screens/Home';
import Signin  from './components/screens/Signin';
import Signup  from './components/screens/Signup';
import Profile  from './components/screens/Profile';
import CreatePost  from './components/screens/CreatePost';
import UserProfile from './components/screens/UserProfile'
import {reducer, initialState} from './reducers/userReducer'
import SubscribesUserPost from "./components/screens/SubcribesUserPosts"

export const UserContext = createContext()

const Routing =()=> {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
     
    if(user) {
      dispatch({type:"USER", payload:user})
      console.log(user);
      // navigate('/')
    } else {
      navigate('/signin')
    }
  }, [])
  return (
    <Routes>
      <Route exact path = "/" element={<Home />} /> 
      <Route path = "/signin" element={<Signin />} />
      <Route path = "/signup" element={<Signup />} />
      <Route exact path = "/profile" element={<Profile />} />
      <Route path = "/create" element={<CreatePost />} />
      <Route path = "/profile/:userid" element={<UserProfile />} />
      <Route path= "/myfollowingpost" element={<SubscribesUserPost/>} />
    </Routes>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
