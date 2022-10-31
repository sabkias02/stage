
import React from 'react';

import Navbar from './Headers/Navbar';
import './App.css';


function App() {
  return (
    <div className="App" >
      
       
      <Navbar/>
      <main id="main-content">
        <div class="slider-one rn-section-gapTop">
      <div class="container">
        <div class="row row-reverce-sm align-items-center"></div>
      <div class="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
<h1 class="title sal-animate" data-sal-delay="200" 
data-sal="slide-up" 
data-sal-duration="800">
  Discover Digital Pieces Of Black History In The Metaverse</h1>


    
    
    <p class="slide-disc sal-animate" data-sal-delay="300" data-sal="slide-up" data-sal-duration="800"></p>
<div class="button-group">
<a href="/" class="btn btn-large btn-primary sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">
<span>Become a verifier</span>
</a>
<a href="/create" class="btn btn-large btn-secondary sal-animate" data-sal-delay="500" data-sal="slide-up" data-sal-duration="800">
<span>Create Proposal</span>
</a>
</div>
</div>
</div>
</div>
</main>
    </div>
    
  );
}

export default App;