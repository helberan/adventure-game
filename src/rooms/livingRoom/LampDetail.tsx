import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import LampDetailImage from '../../assets/lamp-detail.png';
import keyImage from '../../assets/key.png';
import '../routing.css';

export const LampDetail = () => {
  const navigate = useNavigate();
  const [keyPickedUp, setKeyPickedUp] = useState<boolean>();

  const handleKeyClick = () => {
    localStorage.setItem('keyPickedUp', 'true');
    setKeyPickedUp(true);
  };

  const handleViewChange = () => {
    navigate('/adventure-game/');
  };

  useEffect(() => {
    const pickedUp = localStorage.getItem('keyPickedUp') === 'true';
    setKeyPickedUp(pickedUp);
  }, []);

  return (
    <div className="location">
      <div className="image-container">
        <img src={LampDetailImage} />
        <div className="clickable-area" id="cross" onClick={handleViewChange} />
        {!keyPickedUp && (
          <div className="key-area">
            <img src={keyImage} onClick={handleKeyClick} />
          </div>
        )}
      </div>
    </div>
  );
};
