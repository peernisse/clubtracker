// BACKEND API FOR CLUBTRACKER

import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

// Data

import us_course_data from './data/us_course_data.json' with { type: 'json' }; // Importing course data from a JSON file 

// Route /

app.get('/', (req, res) => {
    //res.send( us_course_data );
    const test_msg = {
        message: 'Hello from the server!',
        data: [1, 2, 3, 4, 5],
      };
    res.json(us_course_data);
})

// SERVER

app.listen(8080, () => {
    console.log('server listening on port 8080')
})