import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import SignUp from './routes/Signup';
// import SignIn from './routes/Signin';
import { LoginRoute, PrivateRoute } from './utils/PrivateRoute';
// import PrivateRoute from './utils/PrivateRoute';
import React, { useState } from 'react';
import jwt_decode from 'jwt-decode'
import { NotFound } from './routes/NotFound';
import { useNavigate } from 'react-router-dom';
import Staff from './routes/Staff';

export const AuthContext = React.createContext()

function App() {

  // localStorage.getItem('authTokens')
  let [authTokens, setAuthTokens] = useState(null)
  let [user, setUser] = useState(null)
  console.log(authTokens)
  const history = useNavigate()
  
  let loginUser = async (e )=> {
    e.preventDefault();
    const source = new FormData(e.currentTarget);
    let username = source.get('username')
    let password = source.get('password')
    let response = await fetch('http://127.0.0.1:8000/api/token/', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'username':username,'password':password})
    })
    let data = await response.json()
    if(response.status === 200){ 
      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      history('/')
    }else{
      alert("Error")
    }
  }

  let contextData = {
    user:user,
    loginUser:loginUser
  }

  return (
    <div className="App">
      <AuthContext.Provider value={ contextData }>
        <Routes>
          <Route path='/' element={<PrivateRoute/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Service/>}/>
          <Route path='/library' element={<Service/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/staff' element={<Staff/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<LoginRoute/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;