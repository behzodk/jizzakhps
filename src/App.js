import './styles.css';
import Home from './routes/Home';
import { Route, Routes } from 'react-router-dom';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import SignUp from './routes/Signup';
import SignIn from './routes/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Service/>}/>
        <Route path='/library' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
      
    </div>
  );
}

export default App;