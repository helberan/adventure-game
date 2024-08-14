import { useNavigate } from 'react-router';
import { useState, useEffect, FormEvent } from 'react';
import workRoomDeskImage from '../../assets/wr-desk-detail.png';
import './workRoom.css';
import '../routing.css';

export const DeskDetail = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>('');
  const [codeError, setCodeError] = useState<boolean>(false);
  const [loginSuccesful, setLoginSuccesful] = useState<boolean>(false);

  const handleViewChange = (path: string) => {
    navigate(`/${path}`);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (code !== '1157') {
      setCodeError(true);
      console.log('wrong code');
    } else {
      console.log('code submitted: ', code);
      setCodeError(false);
      setLoginSuccesful(true);
    }
  };

  useEffect(() => {
    console.log(code);
  }, [code]);

  return (
    <div className="location">
      <div className="image-container">
        <img src={workRoomDeskImage} />
        <div className="clickable-area" id="arrowDown" onClick={() => handleViewChange('work-room')} />
        <div className="clickable-area" id="toBookDetail" onClick={() => handleViewChange('wr-book')} />
        <div className="pc-area">
          <div className="pc-area-wrapper">
            {loginSuccesful ? (
              <div className="symbols">
                <code>&yen;</code>
                <code>&curren;</code>
                <code>&iquest;</code>
                <code>&THORN;</code>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" maxLength={4} placeholder="PIN" onChange={(e) => setCode(e.target.value)} />
                <button type="submit">Submit</button>
                {codeError && <p>Wrong password</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
