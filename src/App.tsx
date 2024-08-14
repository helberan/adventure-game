import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LivingRoomTwo } from './rooms/livingRoom/LivingRoomTwo';
import { WorkRoom } from './rooms/workRoom/WorkRoom';
import { LivingRoomOne } from './rooms/livingRoom/LivingRoomOne';
import { DeskDetail } from './rooms/workRoom/DeskDetail';
import { BookDetail } from './rooms/workRoom/BookDetail';
import { PillowDetail } from './rooms/livingRoom/PillowDetail';
import { NotebookDetail } from './rooms/livingRoom/NotebookDetail';
import { LampDetail } from './rooms/livingRoom/LampDetail';

function App() {
  return (
    <div className="game-view">
      <Router>
        <p>game</p>
        <Routes>
          <Route path="/living-room-two" element={<LivingRoomTwo />} />
          <Route path="/work-room" element={<WorkRoom />} />
          <Route path="/wr-desk" element={<DeskDetail />} />
          <Route path="/wr-book" element={<BookDetail />} />
          <Route path="/living-room-one" element={<LivingRoomOne />} />
          <Route path="/lr-pillow" element={<PillowDetail />} />
          <Route path="/lr-notebook" element={<NotebookDetail />} />
          <Route path="/lr-lamp" element={<LampDetail />} />
        </Routes>
        <p>Inventory</p>
      </Router>
    </div>
  );
}

export default App;
