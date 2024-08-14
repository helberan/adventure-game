import { useNavigate } from 'react-router';
import { useState } from 'react';
import LampDetailImage from '../../assets/lamp-detail.png';
import keyImage from '../../assets/key.png';
import '../routing.css';

export const LampDetail = () => {
  const navigate = useNavigate();
  const [keyPickedUp, setKeyPickedUp] = useState<boolean>(false);

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    if (item === 'key') {
      setKeyPickedUp(true);
    }
  };

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={LampDetailImage} />
        <div className="clickable-area" id="cross" onClick={() => handleViewChange('living-room-two')} />
        {!keyPickedUp && (
          <div className="key-area">
            <img src={keyImage} onClick={() => handleItemClick('key')} />
          </div>
        )}
      </div>
    </div>
  );
};
