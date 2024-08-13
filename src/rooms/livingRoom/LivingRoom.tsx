import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import livingRoomImage from '../../assets/living-room.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoom = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  const handleRoomChange = (room: string) => {
    if (room === 'workRoom') {
      navigate('/workRoom');
    } else {
      navigate('/livingRoomDown');
    }
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={livingRoomImage} />
        <div className="clickable-area" id="lockedDoor" onClick={() => handleItemClick('locked door')} />
        <div className="clickable-area" id="pillow" onClick={() => handleItemClick('pillow')} />
        <div className="clickable-area" id="toWorkRoom" onClick={() => handleRoomChange('workRoom')} />
        <div className="clickable-area" id="toLivingRoomDown" onClick={() => handleRoomChange('livingRoomDown')} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
