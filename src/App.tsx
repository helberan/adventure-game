import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LivingRoom } from './rooms/livingRoom/LivingRoom';
import { WorkRoom } from './rooms/workRoom/WorkRoom';
import { LivingRoomDown } from './rooms/livingRoom/LivingRoomDown';
import { Bathroom } from './rooms/bathroom/Bathroom';

function App() {
  return (
    <div className="game-view">
      <Router>
        <p>game</p>
        <Routes>
          <Route path="/" element={<LivingRoom />} />
          <Route path="/workRoom" element={<WorkRoom />} />
          <Route path="/livingRoomDown" element={<LivingRoomDown />} />
          <Route path="/bathroom" element={<Bathroom />} />
        </Routes>
        <p>Inventory</p>
      </Router>
    </div>
  );
}

export default App;
