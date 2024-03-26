import React from 'react';
import './App.css'

const questions = [
  {
    title: 'Mustaqillik qachon qabul qilingan???', // Savol sarlavhası
    variants: ['1990 yil', '1991yil ', '1992 yil'], // Variantlar
    correct: 1, // To'g'ri variantning indeksi (0 dan boshlanadi)
  },
  {
    title: '5*5-25+15=? ', // Savol sarlavhası
    variants: ['20', '0', '15'], // Variantlar
    correct: 2, // To'g'ri variantning indeksi (0 dan boshlanadi)
  },
  {
    title: '9*9-80+9=?', // Savol sarlavhası
    variants: [
      '1',
      '11',
      '10',
    ], // Variantlar
    correct: 2, // To'g'ri variantning indeksi (0 dan boshlanadi)
  },
];

function Result({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100) // Foizni hisoblash
  console.log(step)

  return (
    <div className="progress">
      <div style={{ width: `${percentage}%` }} className="progress-bar"></div> {/* Progress bar */}
      <h1>{question.title}</h1> {/* Savol sarlavhası */}
      {console.log(question.title)}
      <ul>
        {
          question.variants.map((text, index) =>
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>) // Variantlarni ro'yxatga olish
        }
      </ul>
    </div>
  )
}

function Javoblar({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" /> {/* Rasm */}
      <h2>siz {correct} ta tog'ri javob berdingiz {questions.length} ta savoldan </h2> {/* Natija matni */}
      <a href="/"><button>Yana bir bor urinib korish..</button></a> {/* Qayta boshlash tugmasi */}
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0); // Qadam soni holati
  const [correct, setCorrect] = React.useState(0); // To'g'ri javoblar soni holati

  const question = questions[step]; // Joriy savol

  const onClickVariant = (index) => {
    setStep(step + 1) // Qadam sonini bir oshirish
    if (index === question.correct) {
      setCorrect(correct + 1) // To'g'ri javoblar sonini bir oshirish
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? <Result step={step} question={question} onClickVariant={onClickVariant} /> :
          <Javoblar correct={correct} /> // Qadam soni savollar soniga teng bo'lsa natijalarni ko'rsatish
      }
    </div>
  )
}

export default App
