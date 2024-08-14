import { useNavigate } from 'react-router';
import workRoomDeskImage from '../../assets/wr-desk-detail.png';
import './workRoom.css';
import '../routing.css';

export const WorkRoomDesk = () => {
  const navigate = useNavigate();

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomDeskImage} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('work-room')} />
        <div className="clickable-area" id="toBookDetail" onClick={() => handleViewChange('wr-book')} />
        <div id="pc-code">
          <p>enter code</p>
        </div>
      </div>
    </div>
  );
};
