import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import FirstScreen from './components/screen1';
import SecondScreen from './components/screen2';
function App() {
  return (
    <Router>
      <div className='app'>
      <Routes>
        <Route  path = "/" element = {<Home/>}></Route>
        <Route path= "/screen" element ={<FirstScreen/>}></Route>
        <Route path = '/screen2' element={<SecondScreen/>}></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
