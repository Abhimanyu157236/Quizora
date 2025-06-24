import React from 'react';
import GameContent from './components/GameContent';
import quizora from './assets/vecteezy_3d-rendering-questions-mark-sign-icon_13390804.png'
import { useState } from 'react';

const App = () => {
   const[isVisible, setIsVisible] = useState(false)
   const handleComp = () =>{
    setIsVisible(true)
   }
   return(
 <div className=' w-full h-screen bg-[url(./assets/17973871.jpg)] bg-contain flex justify-center items-center'>
  
     {
      isVisible?<GameContent/>: <div className="bg-orange-200 shadow-[15px_37px_3px_3px_rgba(0,_0,_0,_0.1)] w-[80%] h-max sm:w-[80%] md:w-[80%] lg:w-[40%] rounded-xl ">
   <div className="w-[100%]">
          <img src={quizora}  alt="logo" className="w-[20%] mx-[40%] mt-10 mb-4" />
          </div> 
     <div className="flex flex-col items-center">
     <h1 className="text-center font-serif font-bold text-purple-800 text-4xl mb-4">
      Quizora
     </h1> 
        <button className="text-white text-2xl font-serif bg-green-700 rounded-xl py-2 px-5 mb-9"
        onClick={handleComp}
        >
          Start
        </button>                                                                                                                                                                                                                                                                                                       
     </div>
       </div>  
     }
     
 </div>
   )}

    
    

export default App;
