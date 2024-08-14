import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import livingRoomImage from '../../assets/living-room-2.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoomTwo = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={livingRoomImage} />
        <div className="clickable-area" id="lockedDoor" onClick={() => handleItemClick('locked door')} />
        <div className="clickable-area" id="lamp" onClick={() => handleViewChange('lr-lamp')} />
        <div className="clickable-area" id="rightDoor" onClick={() => handleViewChange('work-room')} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('living-room-one')} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
