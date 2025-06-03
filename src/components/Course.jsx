import { useState } from 'react';
import Select from './Select.jsx'; // Importing Select component for potential use in the future                
import Toggle from './Toggle.jsx'; // Importing Toggle component
import states from 'states-us'; // Importing states-us for potential use in the future
import EnterData from './EnterData.jsx'; // Importing EnterData component for data entry functionality
import us_course_data from '../data/us_course_data.json'; // Importing course data from a JSON file      

function Course() {
    
    // Initial states for the inputs
    const [selectedGender, setSelectedGender] = useState('M'); // State for selected
    const [selectedState, setSelectedState] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedTees, setSelectedTees] = useState(''); // State for selected tees    
    
    // Functions to handle inputs state selection changes

    const handleGenderChange = (selection) => {
        setSelectedGender(selection);
        console.log(selection); // Logging the selected
    };

    const handleSelectChange = (option) => {
        setSelectedState(option);
        setSelectedCourse('');           
    };

    const handleCourseChange = (option) => {
        setSelectedCourse(option);
    };

    const handleTeesChange = (option) => {
        setSelectedTees(option);
    };

    // Make array of choices for gender selection

    const genderOptions = [
        {key:'M', value: 'Male'},
        {key:'F', value: 'Female'}
    ];

    // Extracting state names and abbreviations from the states data

    const state_name = states.map(state => state.name);
    const state_abv = states.map(state => state.abbreviation);

    const states_available = us_course_data ? Object.keys(us_course_data) : [];
    

    const state_names = [state_name, state_abv];

    // Get course names for the selected state

    const courseOptions = selectedState && us_course_data[selectedState]
        ? Object.keys(us_course_data[selectedState])
        : [];

    // Get tee names for the selected course

    const teeOptions = selectedCourse && selectedState && us_course_data[selectedState][selectedCourse]
        ? Object.keys(us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender])
        : [];
       
    return (
        <div className="course">
            <h4>Select your gender</h4>
            <Toggle options={genderOptions} onClick={handleGenderChange}/>
            {/*<p>Selected gender: {selectedGender}</p>*/}
            <h4>Select your state</h4>
            <Select options={state_names[[1]]} onChange={handleSelectChange} /> {/* Using Select component to display state names */}
            {/*<p>Selected state: {selectedState}</p>*/}

            { selectedState && courseOptions.length > 0 && (
                <>
                    <h4>Select a course</h4>
                    <Select options={courseOptions} onChange={handleCourseChange} /> {/* Using Select component to display course options */}
                    {/*<p>Selected course: {selectedCourse}</p>*/}
                </>
            )}

            { selectedCourse && teeOptions.length > 0 && (
                <>
                    <h4>Select your tee box</h4>
                    <Select options={teeOptions} onChange={handleTeesChange} /> {/* Using Select component to display tee options */}
                    {/*<p>Teebox Name: {selectedTees}</p>*/}
                </>
            )}

            { selectedTees && selectedState && selectedCourse && (
                <>
                    <h4>Tee box details</h4>
                    <div className="tee-details">
                        {/*<p>Tee Name: {selectedTees}</p>*/}
                        <p className="tee-item">Course Rating: {us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender][selectedTees][0]['tee_tee_length']}</p>
                        <p className="tee-item">Slope Rating: {us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender][selectedTees][0]['tee_par']}</p>
                        <p className="tee-item">Slope Rating: {us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender][selectedTees][0]['tee_course_rating']}</p>
                        <p className="tee-item">Slope Rating: {us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender][selectedTees][0]['tee_slope_rating']}</p>
                        <p className="tee-item">Slope Rating: {us_course_data[selectedState][selectedCourse]['tee_info'][selectedGender][selectedTees][0]['tee_bogey_rating']}</p>
                    </div>
                </>
            )}

            { selectedTees && selectedState && selectedCourse && (
                <>
                    <EnterData data = {selectedTees}/>
                    
                </>
            )}

        </div>
    );
}

export default Course;
// This component displays a course with its title, description, duration, and price.   