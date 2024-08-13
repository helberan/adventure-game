import { useState } from 'react';
import { Modal } from './Modal';

export const Start = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleItemClick = (item: string) => {
    console.log(`clicked ${item}`);
    setIsModalVisible(!isModalVisible);
    setModalContent(item);
  };

  return (
    <div className="location">
      <p>Start</p>
      <button onClick={() => handleItemClick('wooden leg')}>wooden leg</button>
      <button onClick={() => handleItemClick('key')}>key</button>
      <button onClick={() => handleItemClick('backpack')}>backpack</button>
      <Modal content={modalContent} />
    </div>
  );
};
