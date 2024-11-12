import React, {useState} from 'react';
import './Team.css';

const TeamMember = () => {
    //Set Name
    const [textName, setTextName] = useState('');
    const handleChangeLocation = (e) =>{
      setTextName(e.target.value);
    }
    
    //Increase/decrease score by one
    const [count, setCount] = useState(0); 
    const increaseScore = () => {
      setCount(count + 1);
    };
    const decreaseScore = () => {
      setCount(count - 1);
    };

  return (
    <div className="team">
            <textarea className='name'
              value={textName}
              onChange={handleChangeLocation}
              placeholder="Name"/>
        <div className='scoreContainer'>
          <div className='decreaseScore' onClick={decreaseScore}/>
          <div className='score'>
            {count}
          </div>
          <div className='increaseScore' onClick={increaseScore}>
          </div>
        </div>
    </div>
  );
};

export default TeamMember;