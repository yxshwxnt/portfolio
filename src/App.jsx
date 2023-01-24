import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <> 
    <div className="app">
      <div className='side rounded'>
        <Sidebar/>  
      </div>
      <div className="main rounded"> 
      <Router> 
          <Navbar/>
          <Routes> 
            <Route  path='/' element={<About />}/>
            <Route  path='/about' element={<About />}/>
            <Route  path='resume' element={<Resume />} />
            <Route  path='portfoilio' element={<Portfolio />} /> 
            <Route  path='/contact' element={<Contact />} /> 
          </Routes>
      </Router>
      </div>
    </div> 
    </>
  );
}

export default App;
