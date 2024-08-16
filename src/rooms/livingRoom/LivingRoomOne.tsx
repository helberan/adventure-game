import { useState } from 'react';
import { useNavigate } from 'react-router';
import livingRoomOneImage from '../../assets/living-room-1.png';
import pictureImage from '../../assets/picture.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoomOne = () => {
  const navigate = useNavigate();
  const [pictureClicked, setPictureClicked] = useState<boolean>(false);

  const handlePictureClick = () => {
    setPictureClicked(!pictureClicked);
    localStorage.setItem('picturePosition', 'true');
  };

  const handleViewChange = (path: string) => {
    navigate(`/adventure-game/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={livingRoomOneImage} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('')} />
        <div className="clickable-area" id="toPillowDetail" onClick={() => handleViewChange('lr-pillow')} />
        <div className={pictureClicked ? `picture-area-clicked` : `picture-area`}>
          <img src={pictureImage} onClick={handlePictureClick} />
        </div>
      </div>
    </div>
  );
};
