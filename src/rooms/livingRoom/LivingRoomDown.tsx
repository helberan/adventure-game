import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import livingRoomDownImage from '../../assets/living-room-down.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoomDown = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  const handleRoomChange = (room: string) => {
    if (room === 'bathroom') {
      navigate('/bathroom');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={livingRoomDownImage} />
        <div className="clickable-area" id="toLivingRoomUp" onClick={() => handleRoomChange('livingRoom')} />
        <div className="clickable-area" id="toBathroom" onClick={() => handleRoomChange('bathroom')} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
