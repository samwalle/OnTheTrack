import './App.css';
import React, { useState } from 'react';
import TeamMember from './components/team/Team';

function App() {
  const [width, setWidth] = useState(270);
  const [height, setHeight] = useState(210);
  const [components, setComponents] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);


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

  const menuClose = () => {
    setMenuOpen(false);
  }

  return (
    <div className="App">
      <div className='menu'>
        {menuOpen && 
        <div>
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
            <button onClick={menuClose}>Close</button>
            </div>
            </div>};
            <div className='teams' style={{ display: 'flex'}}>
            {components.map((component, index) => (
                <div className="team" key={index} style={{ width: `${width}px`, height: `${height}px` }}>
                  {component}
                </div>
              ))}
            </div>
          </div>
    </div>
  );
}

export default App;
