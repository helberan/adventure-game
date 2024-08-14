import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LivingRoomTwo } from './rooms/livingRoom/LivingRoomTwo';
import { WorkRoom } from './rooms/workRoom/WorkRoom';
import { LivingRoomOne } from './rooms/livingRoom/LivingRoomOne';
import { WorkRoomDesk } from './rooms/workRoom/WorkRoomDesk';
import { WorkRoomBook } from './rooms/workRoom/WorkRoomBook';
import { PillowDetail } from './rooms/livingRoom/PillowDetail';
import { NotebookDetail } from './rooms/livingRoom/NotebookDetail';

function App() {
  return (
    <div className="game-view">
      <Router>
        <p>game</p>
        <Routes>
          <Route path="/living-room-two" element={<LivingRoomTwo />} />
          <Route path="/work-room" element={<WorkRoom />} />
          <Route path="/wr-desk" element={<WorkRoomDesk />} />
          <Route path="/wr-book" element={<WorkRoomBook />} />
          <Route path="/living-room-one" element={<LivingRoomOne />} />
          <Route path="/lr-pillow" element={<PillowDetail />} />
          <Route path="/lr-notebook" element={<NotebookDetail />} />
        </Routes>
        <p>Inventory</p>
      </Router>
    </div>
  );
}

export default App;
