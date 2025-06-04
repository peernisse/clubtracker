import { useState } from 'react';

function Select({ options, onChange }) {     
    // Initial state for the selected option
    const [selectedOption, setSelectedOption] = useState('Select...');

    // Handler for option selection
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="select-component">
            <label htmlFor="options"></label>
            <select className="input-widgets" value={selectedOption} onChange={handleSelectChange} size="5">
                <option value="">{selectedOption}</option>
                {options && options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))} 
            </select>
            {/*selectedOption && <p>You selected: {selectedOption}</p>*/}
        </div>
    );
}

export default Select;
// This component renders a select dropdown with options and displays the selected option below it.