import React, {useState} from 'react';
import TeamMember from './team/Team';

const Menu = () => {

  const [width, setWidth] = useState(270);
  const [height, setHeight] = useState(210);
  const [components, setComponents] = useState([]);

  const handleWidthChange = (e) => {
    setWidth(Number(e.target.value));
  };

  const handleHeightChange = (e) => {
    setHeight(Number(e.target.value));
  };

  const handleAddComponent = () => {
    setComponents([...components, <TeamMember/>])
  }

  const handleRemoveLastObject = () => {
    if (components.length === 0) return; 
    const updatedObjects = [...components];
    updatedObjects.pop();
    setComponents(updatedObjects); 
  };

    return (
    <div className="menu">
        <label>
            Width:
            <input type="number" value={width} onChange={handleWidthChange} />
          </label>
          <label>
            Height:
            <input type="number" value={height} onChange={handleHeightChange} />
          </label>
          <div>
            <button onClick={handleAddComponent}>Add Component</button>
            <button onClick={handleRemoveLastObject}>Remove Last Object</button>
        </div>
    </div>
  );
};

export default Menu;