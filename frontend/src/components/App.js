import React from 'react';
import LandingHeader from './LandingHeader.js';
import MainLandingSplit from './Home/MainLandingSplit.js';
import MainLanding from './Home/MainLanding.js';


export default function App() {

  return (
    <main>
        <LandingHeader />
        <div id = "main-landing-split"><MainLandingSplit /></div>
        <div id = "main-landing"><MainLanding /></div>
    </main>
  );
}