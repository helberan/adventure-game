import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import livingRoomOneImage from '../../assets/living-room-1.png';
import pictureImage from '../../assets/picture.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoomOne = () => {
  const navigate = useNavigate();
  const [pictureClicked, setPictureClicked] = useState<boolean>(false);

  const handlePictureClick = () => {
    if (pictureClicked) {
      localStorage.setItem('picturePosition', 'false');
      setPictureClicked(false);
    } else {
      localStorage.setItem('picturePosition', 'true');
      setPictureClicked(true);
    }
  };

  const handleViewChange = (path: string) => {
    navigate(`/adventure-game/${path}`);
  };

  useEffect(() => {
    const picturePosition = localStorage.getItem('picturePosition') === 'true';
    setPictureClicked(picturePosition);
  }, []);

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
