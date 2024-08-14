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
        <Routes>
          <Route path="/adventure-game" element={<LivingRoomTwo />} />
          <Route path="/adventure-game/work-room" element={<WorkRoom />} />
          <Route path="/adventure-game/wr-desk" element={<DeskDetail />} />
          <Route path="/adventure-game/wr-book" element={<BookDetail />} />
          <Route path="/adventure-game/living-room-one" element={<LivingRoomOne />} />
          <Route path="/adventure-game/lr-pillow" element={<PillowDetail />} />
          <Route path="/adventure-game/lr-notebook" element={<NotebookDetail />} />
          <Route path="/adventure-game/lr-lamp" element={<LampDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
