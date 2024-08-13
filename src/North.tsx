import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';

export const North = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  return (
    <div className="location">
      <p>North</p>
      <Link to="/west">LEFT</Link>
      <Link to="/east">RIGHT</Link>
      <button onClick={() => handleItemClick('wooden leg')}>wooden leg</button>
      <button onClick={() => handleItemClick('key')}>key</button>
      <button onClick={() => handleItemClick('backpack')}>backpack</button>
      <Modal content={modalContent} />
    </div>
  );
};
