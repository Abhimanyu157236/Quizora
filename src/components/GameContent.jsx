import React, { useState, useEffect } from "react";
import quizora from "../assets/vecteezy_3d-rendering-questions-mark-sign-icon_13390804.png";

const GameContent = () => {
  const [score, setScore] = useState(0);
  const [currentGame, setCurrentGame] = useState(0);
  const [questionEnded, setQuestionEnded] = useState(false);
  const [questionStarted, setQuestionStarted] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
 


  const handleNext = () => {
    setCurrentGame(currentGame + 1);
    setQuestionStarted(true);
    setClicked(false)
   
  
  };

  const handlePrev = () => {
    setCurrentGame(currentGame - 1);
    setQuestionEnded(false);
    if(selected ==""){
      setClicked(false)

    }
    else{
      setClicked(true)
    }

  };

  const handleReset = () => {
    setCurrentGame(0);
    setQuestionEnded(false);
    setQuestionStarted(true);
  };

  const questions = [
    {
      que: "1. How many calories are there in 1gm of fat?",
      options: [
        { id: " a", text: "4 Kcal", correct: false },
        { id: " b", text: "9 Kcal", correct: true },
        { id: " c", text: "19 Kcal", correct: false },
        { id: "d", text: "2 Kcal", correct: false },
      ],
    },
    {
      que: "2. How many bones are there in human body?",
      options: [
        { id: " a", text: "200", correct: false },
        { id: " b", text: "202", correct: false },
        { id: "c", text: "204", correct: false },
        { id: "d", text: "206", correct: true },
      ],
    },
    {
      que: "3. What is the full form for Lats muscle?",
      options: [
        { id: " a", text: "Latuce", correct: false },
        { id: "b", text: "Lattisimus dorsi", correct: true },
        { id: "c", text: "Latmus", correct: false },
        { id: "d", text: "None of these", correct: false },
      ],
    },
    {
      que: "4. Who is the prime minister of india?",
      options: [
        { id: "a", text: "Narendra modi", correct: true },
        { id: "b", text: "Arvind mera sathi", correct: false },
        { id: "c", text: "ishow speed", correct: false },
        { id: "d", text: "Ashton hall", correct: false },
      ],
    },
    {
      que: "5. How many calories are there in 1gm of protien?",
      options: [
        { id: "a", text: "4 Kcal", correct: true },
        { id: "b", text: "9 Kcal", correct: false },
        { id: "c", text: "19 Kcal", correct: false },
        { id: "d", text: "2 Kcal", correct: false },
      ],
    },
  ];

  const handleSelection = (correct,id) => {
    if (correct) {
      setScore((prev) => prev + 1);
    }
      setSelected(id)
    setClicked(true);
  };

  useEffect(() => {
  setSelected(null);
}, [currentGame]);

  return (
    // Game starts here
    <div className="bg-orange-200 shadow-[15px_37px_3px_3px_rgba(0,_0,_0,_0.1)] w-[80%] h-max sm:w-[80%] md:w-[80%] lg:w-[40%] rounded-xl ">
      {
        !showResult
        ?
        <>
        <div className="flex justify-between p-1 border-b-2 border-black">
        <h1 className="w-full text-pink-800 text-2xl font-serif font-bold ml-5 mt-3">
          Quizora
        </h1>
        <img src={quizora} alt="logo" className="w-12 mr-2" />
      </div>
      <div key={currentGame}>
        <h1 className="my-7 font-serif ml-5 text-xl">
          {questions[currentGame].que}
          
        </h1>
      </div>
      <div className="w-full">
        {questions[currentGame].options.map((opt) => (
          <button
            key={opt.id}
            className={`w-[80%] mx-[10%] py-4 border-2 border-gray-500 rounded-xl text-center text-xl mb-2
               
              ${
                selected === opt.id 
                  ? "bg-indigo-800 text-white"
                  : "hover:bg-orange-300 hover:scale-105 transition duration-300  hover:shadow-[7px_4px_25px_0px_#574b42]"
              }`}
            disabled={clicked}
            onClick={() => handleSelection(opt.correct,opt.id)}
          >
            {opt.text}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center my-5">
        <button
          className="w-[30%] rounded-lg text-center font-serif bg-purple-700 text-white py-2 px-5 mr-2 "
          onClick={()=>{
            if(!questionEnded){
              handleReset()
              
            }
           else {
              setShowResult(true)
            }
          }}
        >
        {
          questionEnded == true?"see score":"Reset"
        }
        </button>
        <button
          className={
            questionStarted
              ? "w-[30%] rounded-lg text-center font-serif bg-red-500 text-white py-2 px-5 mr-2"
              : "w-[30%] rounded-lg text-center font-serif bg-red-300 text-gray-400 py-2 px-5 mr-2 cursor-not-allowed"
          }
          onClick={() => {
            if (currentGame == 0) {
              setQuestionStarted(false);
            } else {
              handlePrev();
            }
          }}
        >
          ⏮️Prev
        </button>
        <button
          className={
            questionEnded
              ? "w-[30%] rounded-lg text-center font-serif bg-green-300 text-gray-400 py-2 px-5 cursor-not-allowed"
              : "w-[30%] rounded-lg text-center font-serif bg-green-500 text-white py-2 px-5"
          }
          onClick={() => {
            if (currentGame == questions.length - 1) {
              setQuestionEnded(true);
            } else {
              handleNext();
            }
          }}
        >
          Next⏭️
        </button>
      </div>
      </>

      :
      //scoreboard
      <>
      <div className="flex justify-between p-1 border-b-2 border-black">
        <h1 className="w-full text-pink-800 text-2xl font-serif font-bold ml-5 mt-3">
          Quizora
        </h1>
        <img src={quizora} alt="logo" className="w-12 mr-2" />
      </div>
      <h1 className="text-center text-4xl font-serif font-semibold my-20">
        Your score : {score}
      </h1>
</>
      }
      
    </div>
  );
};

export default GameContent;
