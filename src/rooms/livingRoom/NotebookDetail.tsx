import { useNavigate } from 'react-router';
import notebookDetailImage from '../../assets/lr1-book-detail.png';
import '../routing.css';

export const NotebookDetail = () => {
  const navigate = useNavigate();

  const handleViewChange = () => {
    navigate('/adventure-game/lr-pillow');
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={notebookDetailImage} />
        <div className="clickable-area" id="cross" onClick={handleViewChange} />
      </div>
    </div>
  );
};
