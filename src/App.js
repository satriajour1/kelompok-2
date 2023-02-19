import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/landingPage'
import GameList from './components/GameList'
import Game from './components/game'
import Profile from './components/Profile';
import GameDetail from './components/GameDetail'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<><Navigation /><LandingPage /></>} />
        <Route path='/login' element={<><Navigation /><Login /></>} />
        <Route path='/register' element={<><Navigation /><Register /></>} />
        <Route path='/home' element={<><Navigation /><GameList/></>} />
        <Route path='/gameList' element={<><Navigation /><GameList/></>} />
        <Route path='/game' element={<><Navigation /><Game /></>} />
        <Route path='/Profile' element={<><Navigation/><Profile /></>} />
        <Route path='/gameDetail' element={<><Navigation/><GameDetail /></>} />
        

        </Routes>
    </Router>
  );
}

export default App;
