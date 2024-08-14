import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import livingRoomOneImage from '../../assets/living-room-1.png';
import './livingRoom.css';
import '../routing.css';

export const LivingRoomOne = () => {
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
        <img src={livingRoomOneImage} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('living-room-two')} />
        <div className="clickable-area" id="toPillowDetail" onClick={() => handleViewChange('lr-pillow')} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
