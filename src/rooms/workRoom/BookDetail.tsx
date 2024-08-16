import { useNavigate } from 'react-router';
import workRoomBookImage from '../../assets/wr-desk-book-detail.png';
import './workRoom.css';
import '../routing.css';

export const BookDetail = () => {
  const navigate = useNavigate();

  const handleViewChange = () => {
    navigate('/adventure-game/wr-desk');
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomBookImage} />
        <div className="clickable-area" id="cross" onClick={handleViewChange} />
      </div>
    </div>
  );
};
