import { BrowserRouter } from "react-router-dom";

import {  About, 
          Slider,  
          Contact, 
          Experience,  
          Hero, 
          Navbar, 
          Tech, 
          Project, 
          StarsCanvas,
        } from "./components";
import {  DWDBlender, 
          BlackKatAtNight, 
          LavaRock, 
          BirdRing, 
          GMLogo, 
          GinMidoBlender, 
          GMLogoGlow, 
          TwistingCrystals1,           
          lavaScreenshot, 
          W ,
        } from "./assets";

const images = [  DWDBlender,
                  BlackKatAtNight, 
                  LavaRock, 
                  BirdRing, GMLogo, 
                  GinMidoBlender, 
                  GMLogoGlow, 
                  TwistingCrystals1,  
                  lavaScreenshot, 
                  W,
                ]

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Experience />       
        <div className='relative z-0'>
          <Slider images={images} title="My Gallery"/>
          <StarsCanvas />
        </div>        
        <Project />
        <div className="App">
    </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;