import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";


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
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system" );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
/*     {
      icon: "desktop-outline",
      text: "system",
    } */
  ];

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect (()=>{
    switch (theme) {
      case 'dark':
          element.classList.add('dark')
          localStorage.setItem("theme", "dark")
        break;
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem("theme", "light")
        break;
      default:
        localStorage.removeItem("theme")
        onWindowMatch();
        break;
    }
  }, [theme]);
  
  return (
    <BrowserRouter>
      <div className='relative z-0 dark:bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>       
          <Navbar />
          <div className='relative z-0'>
            <Hero />
            <StarsCanvas />
          </div>         
        </div>
        <div className='relative z-0'>
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Tech />
          <StarsCanvas />
        </div>
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
      <div className="fixed top-16 right-20 mr-2 duration-100 dark:bg-slate-900 bg-gray-100 rounded">
        {
          options?.map(opt=>(
            <button
              key={opt.text}
              onClick={() => setTheme(opt.text)}
              className={`w-5 h-5 leading-9 text-xl rounded-full m-1  ${ theme === opt.text && "text-sky-600"}`}>
            <ion-icon name={opt.icon}></ion-icon>
          </button>
          ))
        }

      </div>
    </BrowserRouter>
  );
}

export default App;