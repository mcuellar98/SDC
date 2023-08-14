import React, { useEffect } from "react";
import QuestionsAndAnswers from "./components/componentV/Q&A.jsx"
import axios from 'axios'
import Header from './components/ComponentH/Header.jsx';
import AboutSection from './components/ComponentH/AboutSection.jsx';
import Footer from './components/ComponentH/Footer.jsx';
import ReviewsList from './components/ComponentA/ReviewsList.jsx';


const App = () => {

  return(
    <div>
      <div className='header'>
      <Header />
      <div className="h-max">
      <ReviewsList />
      <QuestionsAndAnswers />
    </div>
      </div>

      <div>
        <AboutSection />
        <Footer />
      </div>
    </div>

  );
};

export default App;

