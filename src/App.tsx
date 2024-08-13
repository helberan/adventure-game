import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { East } from './East';
import { North } from './North';
import { South } from './South';
import { West } from './West';

function App() {
  return (
    <div className="game-view">
      <Router>
        <p>game</p>
        <Routes>
          <Route path="/" element={<North />} />
          <Route path="/south" element={<South />} />
          <Route path="/east" element={<East />} />
          <Route path="/west" element={<West />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
