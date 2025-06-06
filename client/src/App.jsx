import { useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './components/Course.jsx'
import './App.css'

//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    //console.log(data.data);
   const msg = data;
   console.log(msg.data);
    return msg.data;

  })
}


function App() {
  const [count, setCount] = useState(0)
  const us_course_data = apiCall();
  console.log(us_course_data);

  return (
    <>
      <div>
        <h1 className="title-main">Clubtracker</h1>
        <p className="subtitle-main">Know your game</p>
        <Course data={us_course_data}/>
        <button onClick={apiCall}>Make API Call</button>
      </div>
      
    </>
  )
}

export default App
