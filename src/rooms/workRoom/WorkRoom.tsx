import { useNavigate } from 'react-router';
import workRoomImage from '../../assets/work-room.png';
import './workRoom.css';
import '../routing.css';

export const WorkRoom = () => {
  const navigate = useNavigate();

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomImage} />
        <div className="clickable-area" id="leftDoor" onClick={() => handleViewChange('living-room-two')} />
        <div className="clickable-area" id="toDeskDetail" onClick={() => handleViewChange('wr-desk')} />
      </div>
    </div>
  );
};
