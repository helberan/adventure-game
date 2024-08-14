import { useNavigate } from 'react-router';
import workRoomBookImage from '../../assets/wr-desk-book-detail.png';
import './workRoom.css';
import '../routing.css';

export const WorkRoomBook = () => {
  const navigate = useNavigate();

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomBookImage} />
        <div className="clickable-area" id="cross" onClick={() => handleViewChange('wr-desk')} />
      </div>
    </div>
  );
};
