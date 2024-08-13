import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Modal } from '../../Modal';
import bathroomImage from '../../assets/bathroom.png';
import './bathroom.css';
import '../routing.css';

export const Bathroom = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  const handleRoomChange = () => {
    navigate('/livingRoomDown');
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={bathroomImage} />
        <div className="clickable-area" id="toLivingRoomRight" onClick={handleRoomChange} />
      </div>
      <Modal content={modalContent} />
    </div>
  );
};
