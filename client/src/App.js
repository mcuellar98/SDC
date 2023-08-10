import React, { useEffect } from "react";
import QuestionsAndAnswers from "./components/componentV/Q&A.jsx"
import axios from 'axios'

const App = () => {

  return(
    <div>
      <h1>Hello React!!!</h1>
      <QuestionsAndAnswers />
    </div>

  );
};

export default App;