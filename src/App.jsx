import { useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";

// === IMAGENS ===
// base
import modelStep1 from "./assets/model-step1.webp";


// genéricas numeradas
import step1 from "./assets/step-1.webp";
import step2 from "./assets/step-2.webp";
import step3 from "./assets/step-3.webp";

// step 4 tem várias variações no seu print, então vou mapear manualmente conforme o contexto
import step4GetFit from "./assets/step-4-get-fit.webp";
import step4LoseWeight from "./assets/step-4-lose-weight.webp";
import step4Musclar from "./assets/step-4-musclar.webp"; // (parece 'musclar' no print)

import step6Slim from "./assets/step-6-slim.webp";

// step 7 variações
import step7LoseWeight from "./assets/step-7-lose-weight.webp";
import step7Overweight from "./assets/step-7-overweight.webp";
import step7PlusSized from "./assets/step-7-plus-sized.webp";

// step 8 variações
import step8Athletic from "./assets/step-8-athletic.webp";
import step8Average from "./assets/step-8-average.webp";
import step8Curvy from "./assets/step-8-curvy.webp";
import step8SlimBody from "./assets/step-8-slim-body.webp";

import step9 from "./assets/step-9.webp";
import step10 from "./assets/step-10.webp";
import step11 from "./assets/step-11.webp";
import step12 from "./assets/step-12.webp";
import step13 from "./assets/step-13.webp";

// (não vi step-14.webp no print)
import step15 from "./assets/step-15.webp";
import step16 from "./assets/step-16.webp";
import step17 from "./assets/step-17.webp";
import step18 from "./assets/step-18.webp";

// (não vi 19/20/21 no print)
import step22 from "./assets/step-22.webp";
// (não vi 23)
import step24 from "./assets/step-24.webp";

// (pulei várias porque não apareceram no screenshot, mas tinha step-34.webp)
import step34 from "./assets/step-34.webp";

// gráfico (parece ser o chart de progresso final)
import grafic from "./assets/grafic.png";

const step4end = <GiWeightLiftingUp />;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  // Mapa pergunta -> imagem
  // você pode ajustar livremente qual imagem casa melhor com cada etapa
  const questionImages = {
    1: modelStep1,
    2: step1,
    3: step2,
    4: "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-weight-sports-and-games-smashingstocks-glyph-smashing-stocks.png", // "Qual é seu objetivo?" -> faz sentido usar lose-weight
    5: step3,
    6: step4end,
    7: step7PlusSized, // "Qual seu tipo de corpo atual?"
    8: step8SlimBody, // "Corpo alvo"
    9: step9,
    10: step10,
    11: step11,
    12: step12,
    13: step13,
    14: step15,
    15: step16,
    16: step17,
    17: step18,
    18: step18,
    19: step22,
    20: step22,
    21: step22,
    22: step24,
    23: step24,
    24: step24,
    25: step7Overweight, // dieta/estilo alimentar - você pode trocar
    26: step7LoseWeight,
    27: step4Musclar,
    28: step8Average,
    29: step8Curvy,
    30: step6Slim,
    31: step8Athletic,
    32: step8Athletic,
    33: step8Athletic,
    34: step34,
    35: step10,
    36: step10,
    37: grafic, // tela de gráfico / timeline
    38: step8Athletic,
    39: step8Average,
    40: step1,
    41: step2,
    42: grafic, // "criando seu plano"
    43: grafic  // plano pronto
  };

  // 43 perguntas baseadas no quiz real do Mad Muscles
  const questions = [
    {
      id: 1,
      route: "step-about",
      type: "info",
      title: "Over 1 million",
      subtitle: "users have chosen us",
      buttonText: "Got it"
    },
    {
      id: 2,
      route: "step-ever-bg",
      question: "Have you ever done calisthenics before?",
      type: "single",
      options: ["Yes", "No"]
    },
    {
      id: 3,
      route: "step-info",
      type: "info",
      title: "You've got this!",
      subtitle:
        "Our Calisthenics program is a straightforward and powerful option for all fitness levels.\n\nWe'll help you get in shape at home—no equipment needed!",
      buttonText: "Got it"
    },
    {
      id: 4,
      route: "step-goal",
      question: "What is your main goal?",
      type: "single",
      options: [
        "Lose weight",
        "Build muscle",
        "Get toned",
        "Improve endurance",
        "Stay healthy"
      ]
    },
    {
      id: 5,
      route: "step-info-icon",
      type: "info",
      title: "Great choice!",
      subtitle:
        "We'll personalize your program to help you achieve your goals",
      buttonText: "Continue"
    },
    {
      id: 6,
      route: "step-additional-goals",
      question: "Any additional goals? (Select all that apply)",
      type: "multiple",
      options: [
        "Increase energy",
        "Reduce stress",
        "Better posture",
        "Improve flexibility",
        "Build confidence",
        "None"
      ]
    },
    {
      id: 7,
      route: "step-bodytype-grid",
      question: "What is your current body type?",
      type: "single",
      options: ["Slim", "Average", "Athletic", "Curvy", "Plus size"]
    },
    {
      id: 8,
      route: "step-target-body-grid",
      question: "What is your target body type?",
      type: "single",
      options: ["Slim & toned", "Athletic", "Muscular", "Strong & fit"]
    },
    {
      id: 9,
      route: "step-fitness-experience-bg",
      question: "What is your fitness experience level?",
      type: "single",
      options: ["Beginner", "Intermediate", "Advanced"]
    },
    {
      id: 10,
      route: "step-best-shape-bg",
      question: "When were you in your best shape?",
      type: "single",
      options: [
        "Right now",
        "1-2 years ago",
        "3-5 years ago",
        "5+ years ago",
        "Never been in great shape"
      ]
    },
    {
      id: 11,
      route: "step-flexible-bg",
      question: "How flexible are you?",
      type: "single",
      options: [
        "Very stiff",
        "Below average",
        "Average",
        "Above average",
        "Very flexible"
      ]
    },
    {
      id: 12,
      route: "step-problem-areas-bg",
      question: "What are your problem areas? (Select all that apply)",
      type: "multiple",
      options: [
        "Arms",
        "Belly",
        "Thighs",
        "Glutes",
        "Back",
        "Chest",
        "None"
      ]
    },
    {
      id: 13,
      route: "step-special-programs-bg",
      question: "Are you interested in any special focus?",
      type: "multiple",
      options: [
        "Core strength",
        "Upper body",
        "Lower body",
        "Full body",
        "Flexibility training"
      ]
    },
    {
      id: 14,
      route: "step-info-special",
      type: "info",
      title: "Personalizing your program",
      subtitle:
        "We're creating a custom workout plan just for you",
      buttonText: "Continue"
    },
    {
      id: 15,
      route: "step-breath-bg",
      question: "Do you get out of breath easily?",
      type: "single",
      options: [
        "Very easily",
        "Somewhat easily",
        "Not really",
        "Not at all"
      ]
    },
    {
      id: 16,
      route: "step-workout-frequency-bg",
      question: "How often do you want to work out?",
      type: "single",
      options: [
        "2-3 times per week",
        "3-4 times per week",
        "4-5 times per week",
        "5-6 times per week",
        "Every day"
      ]
    },
    {
      id: 17,
      route: "step-walk-bg",
      question: "How much do you walk daily?",
      type: "single",
      options: [
        "Less than 30 min",
        "30-60 min",
        "1-2 hours",
        "2+ hours"
      ]
    },
    {
      id: 18,
      route: "step-workout-duration-bg",
      question: "How long can you work out each day?",
      type: "single",
      options: [
        "15-20 minutes",
        "20-30 minutes",
        "30-45 minutes",
        "45-60 minutes",
        "60+ minutes"
      ]
    },
    {
      id: 19,
      route: "step-work-schedule",
      question: "What is your work schedule like?",
      type: "single",
      options: [
        "Regular 9-5",
        "Irregular hours",
        "Night shifts",
        "Work from home",
        "Not working"
      ]
    },
    {
      id: 20,
      route: "step-typical-day",
      question: "Describe your typical day",
      type: "single",
      options: [
        "Very active",
        "Moderately active",
        "Somewhat active",
        "Mostly sedentary"
      ]
    },
    {
      id: 21,
      route: "step-energy-level",
      question: "What is your energy level throughout the day?",
      type: "single",
      options: [
        "Very low",
        "Low",
        "Moderate",
        "High",
        "Very high"
      ]
    },
    {
      id: 22,
      route: "step-info-energy",
      type: "info",
      title: "Optimizing your energy",
      subtitle:
        "We'll design workouts that match your energy patterns",
      buttonText: "Continue"
    },
    {
      id: 23,
      route: "step-water",
      question: "How much water do you drink daily?",
      type: "single",
      options: [
        "Less than 4 glasses",
        "4-6 glasses",
        "6-8 glasses",
        "8-10 glasses",
        "10+ glasses"
      ]
    },
    {
      id: 24,
      route: "step-sleep-rows",
      question: "How many hours do you sleep per night?",
      type: "single",
      options: [
        "Less than 5",
        "5-6 hours",
        "6-7 hours",
        "7-8 hours",
        "8+ hours"
      ]
    },
    {
      id: 25,
      route: "step-diets",
      question: "Do you follow any specific diet?",
      type: "single",
      options: [
        "No specific diet",
        "Low carb",
        "High protein",
        "Vegetarian",
        "Vegan",
        "Keto",
        "Other"
      ]
    },
    {
      id: 26,
      route: "step-habits",
      question: "What are your eating habits? (Select all that apply)",
      type: "multiple",
      options: [
        "Eat breakfast regularly",
        "Snack often",
        "Late night eating",
        "Meal prep",
        "Eat out frequently"
      ]
    },
    {
      id: 27,
      route: "step-crave",
      question: "What do you crave most? (Select all that apply)",
      type: "multiple",
      options: [
        "Sweet foods",
        "Salty snacks",
        "Fried foods",
        "Carbs",
        "Nothing specific"
      ]
    },
    {
      id: 28,
      route: "step-eating-habits",
      question: "How would you describe your eating habits?",
      type: "single",
      options: [
        "Very healthy",
        "Mostly healthy",
        "Average",
        "Could be better",
        "Unhealthy"
      ]
    },
    {
      id: 29,
      route: "step-life-events",
      question:
        "Any recent life events affecting your fitness? (Select all that apply)",
      type: "multiple",
      options: [
        "Pregnancy/postpartum",
        "Injury recovery",
        "Illness",
        "High stress",
        "Major life change",
        "None"
      ]
    },
    {
      id: 30,
      route: "step-measures",
      question: "What is your height?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your height (e.g., 5'6\" or 168 cm)"
    },
    {
      id: 31,
      route: "step-current-weight-bmi",
      question: "What is your current weight?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your current weight (e.g., 150 lbs or 68 kg)"
    },
    {
      id: 32,
      route: "step-target-weight-banner",
      question: "What is your target weight?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your target weight"
    },
    {
      id: 33,
      route: "step-date-of-birth",
      question: "What is your date of birth?",
      type: "input",
      inputType: "date",
      placeholder: "MM/DD/YYYY"
    },
    {
      id: 34,
      route: "step-summary",
      type: "info",
      title: "Almost there!",
      subtitle:
        "Just a few more questions to personalize your program",
      buttonText: "Continue"
    },
    {
      id: 35,
      route: "step-event",
      question: "Do you have an upcoming event or deadline?",
      type: "single",
      options: [
        "Wedding",
        "Vacation",
        "Reunion",
        "Photo shoot",
        "Competition",
        "No specific event"
      ]
    },
    {
      id: 36,
      route: "step-event-date",
      question: "When is your event?",
      type: "input",
      inputType: "date",
      placeholder: "MM/DD/YYYY",
      conditional: true // Só aparece se tiver evento
    },
    {
      id: 37,
      route: "step-event-chart",
      type: "info",
      title: "Your progress timeline",
      subtitle:
        "Based on your goals, here's what you can achieve",
      buttonText: "Continue"
    },
    {
      id: 38,
      route: "step-main-goals",
      question:
        "Confirm your main fitness goals (Select all that apply)",
      type: "multiple",
      options: [
        "Weight loss",
        "Muscle gain",
        "Toning",
        "Strength",
        "Flexibility",
        "Endurance"
      ]
    },
    {
      id: 39,
      route: "step-confident",
      question:
        "How confident are you about reaching your goals?",
      type: "single",
      options: [
        "Not confident",
        "Somewhat confident",
        "Confident",
        "Very confident",
        "Extremely confident"
      ]
    },
    {
      id: 40,
      route: "step-email",
      question: "What is your email address?",
      type: "input",
      inputType: "email",
      placeholder: "Enter your email"
    },
    {
      id: 41,
      route: "step-name",
      question: "What's your name?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your name"
    },
    {
      id: 42,
      type: "info",
      title: "Creating your personalized plan...",
      subtitle: "This will only take a moment",
      buttonText: "View my plan",
      isLoading: true
    },
    {
      id: 43,
      type: "info",
      title: "Your plan is ready!",
      subtitle:
        "Get ready to transform your body with calisthenics",
      buttonText: "Get started",
      isFinal: true
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Quiz completed!", answers);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    if (input && input.value.trim()) {
      handleAnswer(input.value);
    }
  };

  const handleMultipleChoice = (option) => {
    const currentAnswers = answers[currentQuestion] || [];
    const newAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter((a) => a !== option)
      : [...currentAnswers, option];

    setAnswers({ ...answers, [currentQuestion]: newAnswers });
  };

  const handleMultipleNext = () => {
    if (
      answers[currentQuestion] &&
      answers[currentQuestion].length > 0
    ) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        console.log("Quiz completed!", answers);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  // pega a imagem certa pra pergunta atual
  const currentImage =
    questionImages[currentQ.id] || modelStep1;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <div className="border border-orange-500 px-2 py-1 text-sm font-bold">
            MAD
          </div>
          <div className="border border-orange-500 bg-orange-500 px-2 py-1 text-sm font-bold">
            MUSCLES
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <button className="hover:text-orange-400">Help</button>
          <button className="hover:text-orange-400">English</button>
          <div className="space-y-1 cursor-pointer">
            <div className="w-5 h-[2px] bg-white"></div>
            <div className="w-5 h-[2px] bg-white"></div>
            <div className="w-5 h-[2px] bg-white"></div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="w-full bg-[#1a1a1a] h-1">
        <div
          className="bg-orange-500 h-1 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress Counter */}
      <div className="px-8 py-2 text-right text-sm text-gray-400">
        {currentQuestion + 1}/{questions.length}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-16 py-8 relative">
        {/* Back Button */}
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="absolute top-0 left-0 md:top-4 md:left-8 text-white hover:text-orange-400 flex items-center gap-2"
            title="Go back"
          >
            ←
          </button>
        )}

        {/* Content Area */}
        <div className="text-center md:text-left max-w-md">
          {/* Info Screen */}
          {currentQ.type === "info" && (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {currentQ.title}
              </h1>
              <p className="text-lg text-gray-300 whitespace-pre-line">
                {currentQ.subtitle}
              </p>
              <button
                onClick={() =>
                  handleAnswer("info-acknowledged")
                }
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition flex items-center gap-2 mx-auto md:mx-0"
              >
                {currentQ.buttonText} →
              </button>
            </div>
          )}

          {/* Question Screens */}
          {currentQ.type !== "info" && (
            <>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                {currentQ.question}
              </h2>

              {/* Single Choice - Custom para id 4 */}
              {currentQ.type === "single" && currentQ.id === 4 ? (
                <div className="flex flex-col gap-6 w-full max-w-xl mx-auto md:mx-0">
                  <button
                    onClick={() => handleAnswer("Lose Weight")}
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">Lose Weight</span>
                    </div>
                    <img src={step4LoseWeight} alt="Lose Weight" className="w-[120px] h-[120px] object-contain" />
                  </button>
                  <button
                    onClick={() => handleAnswer("Get Fit and Maintain Weight")}
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">Get Fit and Maintain Weight</span>
                    </div>
                    <img src={step4GetFit} alt="Get Fit and Maintain Weight" className="w-[120px] h-[120px] object-contain" />
                  </button>
                  <button
                    onClick={() => handleAnswer("Build Muscles and Strength")}
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">Build Muscles and Strength</span>
                    </div>
                    <img src={step4Musclar} alt="Build Muscles and Strength" className="w-[120px] h-[120px] object-contain" />
                  </button>
                </div>
              ) : null}
              {/* Single Choice - padrão para outros */}
              {currentQ.type === "single" && currentQ.id !== 4 && (
                <div className="flex flex-col space-y-3 w-full max-w-[320px] mx-auto md:mx-0">
                  {currentQ.options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          handleAnswer(option)
                        }
                        className="flex justify-between items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] py-3 px-5 rounded transition border border-transparent hover:border-orange-500"
                      >
                        <span>{option}</span>
                        <span className="text-orange-500 text-lg">
                          →
                        </span>
                      </button>
                    )
                  )}
                </div>
              )}

              {/* Multiple Choice */}
              {currentQ.type === "multiple" && (
                <div className="w-full max-w-[320px] mx-auto md:mx-0">
                  <div className="flex flex-col space-y-3 mb-6">
                    {currentQ.options.map(
                      (option, index) => {
                        const isSelected =
                          answers[currentQuestion]?.includes(
                            option
                          );
                        return (
                          <button
                            key={index}
                            onClick={() =>
                              handleMultipleChoice(
                                option
                              )
                            }
                            className={`flex justify-between items-center py-3 px-5 rounded transition border ${
                              isSelected
                                ? "bg-orange-500 border-orange-500 text-white"
                                : "bg-[#1a1a1a] border-transparent hover:bg-[#2a2a2a] hover:border-orange-500"
                            }`}
                          >
                            <span>{option}</span>
                            {isSelected && (
                              <span className="text-xl">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      }
                    )}
                  </div>
                  <button
                    onClick={handleMultipleNext}
                    disabled={
                      !answers[currentQuestion] ||
                      answers[currentQuestion]
                        .length === 0
                    }
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed py-3 px-5 rounded transition font-semibold"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* Input */}
              {currentQ.type === "input" && (
                <form
                  onSubmit={handleInputSubmit}
                  className="w-full max-w-[320px] mx-auto md:mx-0"
                >
                  <input
                    type={
                      currentQ.inputType || "text"
                    }
                    placeholder={
                      currentQ.placeholder
                    }
                    defaultValue={
                      answers[currentQuestion] ||
                      ""
                    }
                    className="w-full bg-[#1a1a1a] text-white py-3 px-5 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500 border border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded transition font-semibold"
                  >
                    Continue →
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Imagem dinâmica */}
        {!currentQ.isFinal && (
          <div className="mt-8 md:mt-0 flex items-center justify-center">
            <img
              src={currentImage}
              alt={`Step ${currentQ.id}`}
              className="w-[180px] md:w-[220px] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
