import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn';
import HomePage from './Pages/HomePage';

function App(){
  return (
    // <LogIn/>
    <Router>
      <Routes>
        <Route  path='/' element={<LogIn/>} ></Route>
        <Route  path='/homepage' element={<HomePage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;