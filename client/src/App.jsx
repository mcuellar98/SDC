import React, { useEffect } from "react";
import QuestionsAndAnswers from "./components/componentV/Q&A.jsx"
import axios from 'axios'
import Header from './components/ComponentH/Header.jsx';


const App = () => {

  return(
    <div>
      <div className='header'>
      <Header />
      <div>
      <QuestionsAndAnswers />
    </div>
      </div>

    </div>

  );
};

export default App;

