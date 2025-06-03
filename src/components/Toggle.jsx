import { useState } from 'react';

function Toggle({ options, onClick }) {
  const [selectedToggle, setSelectedToggle] = useState(options[0].key);

  const handleToggle = (selectedToggle) => {
    setSelectedToggle(selectedToggle);
    console.log(selectedToggle); 
    if(onClick) {
      onClick(selectedToggle);
    }
  };

  return (
    <div className="toggle-button-group">
      <button 
        className={selectedToggle === options[0].key ? "active" : ""}
        onClick={() => handleToggle(options[0].key)}
      >
        {options[0].value}
      </button>
      <button
        className={selectedToggle === options[1].key ? "active" : ""}
        onClick={() => handleToggle(options[1].key)}
      >
        {options[1].value}
      </button>
    </div>
  );
};

export default Toggle;
