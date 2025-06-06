import us_course_data from '../server/data/us_course_data.json' with { type: 'json' };
import states from 'states-us'; // Importing states-us for potential use in the future
import axios from 'axios';

const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-throw the error to be handled by the caller
    }
  };


  const result = await fetchData('http://localhost:8080');
  console.log(result);