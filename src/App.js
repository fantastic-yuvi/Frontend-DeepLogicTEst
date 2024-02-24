import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Home} from './components/home.js';
import {Login} from './components/login';
import {Signup} from './components/signup';
import {Dashboard} from './components/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
