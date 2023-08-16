import React, { useEffect } from "react";
import ReviewsList from './components/componentA/ReviewsList.jsx'
import QuestionsAndAnswers from "./components/componentV/Q&A.jsx"
import axios from 'axios'
import Header from './components/ComponentH/Header.jsx';
import AboutSection from './components/ComponentH/AboutSection.jsx';
import Footer from './components/ComponentH/Footer.jsx';
import OverviewModule from './components/ComponentH/OverviewModule.jsx';


const App = () => {

  return(
    <div>
      <div className='header'>
      <Header />
      </div>

      <div  id="overview">
        <OverviewModule />
      </div>

      <div >
        <ReviewsList />
      </div>
      <div >
      <QuestionsAndAnswers />
    </div>


      <div id="about">
        <AboutSection />
        <Footer />
      </div>
    </div>

  );
};

export default App;

