import { useState } from "react";
import Toggle from "./Toggle.jsx"; // Importing Toggle component
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function EnterData() {
    const [startDate, setStartDate] = useState(new Date());
    const [score, setScore] = useState("");
    const [selectedHoles, setSelectedHoles] = useState(""); // State for selected holes

    const holesOptions = [
        {key:'18', value: '18 holes'},
        {key:'9', value: '9 holes'}
    ];

    const handleHolesChange = (selection) => {
        setSelectedHoles(selection);
        console.log(selection); // Logging the selected
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var new_score = score;
        var score_date = startDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
        console.log("Score date: " + score_date);
        console.log("Score submitted: " + new_score);
        setScore('');
        setStartDate(new Date()); // Reset date picker to today
    }
        return(
            <div className="enter-data">
                <h2>Enter Data</h2>
                <h4>Select holes format</h4>
                <Toggle options={holesOptions} onClick={handleHolesChange}/>
                <h4>Enter score date</h4>
                <DatePicker className="input-widgets" selected={startDate} onChange={(date) => setStartDate(date)} />
                <h4>Enter your score</h4>
                <input 
                    id="score-input" 
                    type="number" 
                    className="input-widgets" 
                    placeholder="Enter your score"
                    value={score}
                    onChange={e => setScore(e.target.value)}
                />
                <button className="submit-button" type="submit" onClick={handleSubmit}>Submit</button>
                {/* Future form elements will go here */}
            </div>
        )
}

export default EnterData;
// This component is a placeholder for future data entry functionality.