import { useState } from "react";
import logo from "../public/logo.png";

const formQuestions = [
  "Are you male and aged between 18-65?",
  "Are you suffering from hair loss?",
  "Do you have hair loss in patches, or have an itchy or sore scalp?",
  "Is your hair loss limited to the temple area?",
  "Do you have sudden unexplained hair loss, or complete hair loss?",
];

function App() {
  const [qIndex, setqIndex] = useState(0);
  const [responses, setResponses] = useState<boolean[]>([]);

  function next(newResponse: boolean) {
    setqIndex((prev) => prev + 1);
    setResponses((prevResponses) => [...prevResponses, newResponse]);
  }

  function handleSubmit() {
    const data: { [key: string]: string } = {};
    formQuestions.forEach((question, index) => {
      data[question] = responses[index] ? "Yes" : "No";
    });
    console.log("Data", data);
  }

  return (
    <main className="flex justify-center">
      <div className="">
        <header className="">
          <img src={logo} alt="MedExpress Logo" />
        </header>
      </div>
      <div>
        <h1>Consulting Form</h1>
        <div>
          <p>{formQuestions[qIndex]}</p>
        </div>
      </div>
      {qIndex <= formQuestions.length - 1 && (
        <button onClick={() => next(true)}>Yes</button>
      )}
      {qIndex <= formQuestions.length - 1 && (
        <button onClick={() => next(false)}>No</button>
      )}

      {qIndex === formQuestions.length && (
        <h2>
          Thanks for complete the form! Your answers were sended to our doctors.
        </h2>
      )}
    </main>
  );
}

export default App;
