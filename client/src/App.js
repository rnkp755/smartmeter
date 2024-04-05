import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import PowerState from './context/electricityData/PowerState';
import UserState from './context/userData/UserState';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <UserState>
        <PowerState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </Router>
        </PowerState>
      </UserState>
    </>
  );
}

export default App;
