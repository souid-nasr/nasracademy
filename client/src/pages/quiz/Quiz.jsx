import "./quiz.css";
import { useEffect, useMemo, useState } from "react";
import Start from "../../components/quiz/Start";
import Timer from "../../components/quiz/Timer";
import Quiz from "../../components/quiz/Quiz";

function PlayQuiz() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      text: "1. React est un ________",
      genre:"React Js",
      answers: [
        {
          text: "A-Bibliothèque Javascrip",
          correct: true,
        },
        {
          text: "B-Framework Javascript",
          correct: false,
        },
        {
          text: "C-Les deux A et B sont vrais.",
          correct: false,
        },
        {
          text: "D-Aucune de ces réponses n’est vraie.",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      text: "2. ReactJS utilise _____ pour augmenter les performances",
      genre:"React Js",
      answers: [
        {
          text: "A-DOM réel",
          correct: false,
        },
        {
          text: "B-DOM virtuel",
          correct: true,
        },
        {
          text: "C-Les deux A et B sont vrais.",
          correct: false,
        },
        {
          text: "D-Aucune de ces réponses n’est vraie.",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      text: "3. ReactJS couvre la_________",
      genre:"React Js",
      answers: [
        {
          text: "A-Couche d’interface utilisateur (UI) dans une application",
          correct: true,
        },
        {
          text: "B-Couche de données dans une application",
          correct: false,
        },
        {
          text: "C-Les deux A et B sont vrais.",
          correct: false,
        },
        {
          text: "D-Aucune de ces réponses n’est vraie.",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      text: "4. React est basé sur _______",
      genre:"React Js",
      answers: [
        {
          text: "A-Les modules",
          correct: false,
        },
        {
          text: "B-Les services",
          correct: false,
        },
        {
          text: "C-Les composants",
          correct: true,
        },
        {
          text: "D-Aucune de ces réponses n’est vraie.",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      text: "5. Combien d’éléments un composant React renvoie-t-il?",
      genre:"React Js",
      answers: [
        {
          text: "A-1 élément",
          correct: false,
        },
        {
          text: "B-2 élémentS",
          correct: false,
        },
        {
          text: "C-Plusieurs éléments",
          correct: true,
        },
        {
          text: "D-Aucune de ces réponses n’est vraie.",
          correct: false,
        },
      ],
    },
  ];

  const scorePyramid = useMemo(
    () =>
      [
        { id: 1, score: "1" },
        { id: 2, score: "2" },
        { id: 3, score: "3" },
        { id: 4, score: "5" },
        { id: 5, score: "10" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(scorePyramid.find((m) => m.id === questionNumber - 1).score);
  }, [questionNumber, scorePyramid]);

  return (
  <div>
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <div className="endText">
                <hr/>
                <h3 style={{fontSize:"40px",color:"teal"}}>Thank You {username}</h3>
                <h1 style={{fontSize:"60px",color:"red"}} >You earned: {earned}</h1>
                <hr/>
              </div>
              
            ): (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="scoreList">
              {scorePyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "scoreListItem active"
                      : "scoreListItem"
                  }
                >
                  <span className="scoreListItemNumber">{m.id}</span>
                  <span className="scoreListItemAmount">{m.score}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  </div>
  );
}

export default PlayQuiz;