import us_course_data from './src/data/us_course_data.json' assert { type: 'json' };
import states from 'states-us'; // Importing states-us for potential use in the future

/*
console.log(Array.isArray(states)); // Should print true if it's an array
console.log(states); // See the actual structure
*/

const states_available = us_course_data ? Object.keys(us_course_data) : [];

// Get array of state names
const state_names = states[['states']].map(state => state.name);


// Get array of state abbreviations
const state_abvs = states[['states']].map(state => state.abbreviation);
const indices = states_available.map(abbr => state_abvs.indexOf(abbr));

console.log(indices); // Log the indices of the state abbreviations in the state_abvs array




//console.log(state_names);
//console.log(state_abvs);
//console.log(states_available);

/*const course_name = 'Wasatch Peaks - Wasatch Peaks Ranch';
var gender = 'M';

const tee_names = Object.keys(us_course_data['UT'][course_name]['tee_info'][gender]);

console.log('Tee names:', tee_names);

var selectedTee = 'Blue';

var tee_stats = us_course_data['UT'][course_name]['tee_info'][gender][selectedTee];
console.log('Tee stats:', tee_stats);

console.log(tee_stats[0]['tee_name']);
console.log(tee_stats[0]['tee_course_rating']);
console.log(tee_stats[0]['tee_slope_rating']);*/