import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import workRoomImage from '../../assets/work-room.png';
import './workRoom.css';
import '../routing.css';

export const WorkRoom = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  const handleRoomChange = () => {
    navigate('/');
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomImage} />
        <div className="clickable-area" id="toLivingRoom" onClick={handleRoomChange} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
