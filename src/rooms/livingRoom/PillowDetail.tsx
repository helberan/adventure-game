import { useNavigate } from 'react-router';
import pillowDetailImage from '../../assets/lr1-pillow-detail.png';
import '../routing.css';

export const PillowDetail = () => {
  const navigate = useNavigate();

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="location">
      <div className="image-container">
        <img src={pillowDetailImage} />
        <div className="clickable-area" id="toNotebookDetail" onClick={() => handleViewChange('lr-notebook')} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('living-room-one')} />
      </div>
    </div>
  );
};
