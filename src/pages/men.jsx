import React, { useState } from "react";
import { GiWeightLiftingUp } from "react-icons/gi";

// === IMAGENS ===
// base (TODO: trocar para modelo masculino se houver)
import modelStep1 from "./assets/model-step1.webp";

// genéricas numeradas (TODO: trocar para versões masculinas se houver)
import step1 from "./assets/step-1.webp";
import step2 from "./assets/step-2.webp";
import step3 from "./assets/step-3.webp";

// step 4 variações (masculino de objetivo)
import step4GetFit from "./assets/step-4-get-fit.webp"; // TODO versão masculina
import step4LoseWeight from "./assets/step-4-lose-weight.webp"; // TODO versão masculina
import step4Musclar from "./assets/step-4-musclar.webp"; // TODO versão masculina

const step6Slim =
  "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-weight-sports-and-games-smashingstocks-glyph-smashing-stocks.png";

// step 7 variações - corpo atual (TODO substituir com corpos masculinos)
import step7Slim from "./assets/step-7-slim.webp";
import step7Normal from "./assets/step-7-normal.webp";
import step7PlusSized from "./assets/step-7-plus-sized.webp";
import step7Overweight from "./assets/step-7-overweight.webp";

// step 8 variações - corpo alvo (TODO substituir com corpos masculinos)
import step8Athletic from "./assets/step-8-athletic.webp";
import step8Average from "./assets/step-8-average.webp";
import step8Curvy from "./assets/step-8-curvy.webp";
import step8SlimBody from "./assets/step-8-slim-body.webp";

import step9 from "./assets/step-9.webp";
import step10 from "./assets/step-10.webp";
import step11 from "./assets/step-11.webp";
import step12 from "./assets/step-12.webp";
import step13 from "./assets/step-13.webp";

import step15 from "./assets/step-15.webp";
import step16 from "./assets/step-16.webp";
import step17 from "./assets/step-17.webp";
import step18 from "./assets/step-18.webp";

import step22 from "./assets/step-22.webp";
import step24 from "./assets/step-24.webp";
import step34 from "./assets/step-34.webp";

// gráfico final
import grafic from "./assets/grafic.png";

const step4end = (
  <GiWeightLiftingUp className="text-orange-500 w-[120px] h-[120px]" />
);

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0); // index no array
  const [answers, setAnswers] = useState({}); // { [indexPergunta]: resposta }

  // Mapa pergunta -> visual principal
  // Pode ser string (src), objeto especial (id 7/8), ou JSX (id 6)
  // IMPORTANTE: você pode apontar para novas imagens masculinas aqui
  const questionImages = {
    1: modelStep1,
    2: step1,
    3: step2,
    4: step4LoseWeight, // "Qual é seu objetivo?" -> perda de peso default
    5: step3,
    6: step4end, // ícone peso
    7: {
      // corpo atual (masculino)
      Slim: step7Slim,
      Average: step7Normal,
      "Plus-sized": step7PlusSized,
      Overweight: step7Overweight,
    },
    8: {
      // corpo desejado (masculino)
      "Lean & defined": step8SlimBody,
      Athletic: step8Athletic,
      "Muscular / Bulk": step8Average,
      "Strong & powerful": step8Curvy,
    },
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
    25: step7Overweight, // dieta (placeholder)
    26: step7Normal,
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
    37: grafic, // timeline
    38: step8Athletic,
    39: step8Average,
    40: step1,
    41: step2,
    42: grafic, // criando seu plano
    43: grafic, // plano pronto
  };

  // 43 perguntas (versão masculina)
  const questions = [
    {
      id: 1,
      route: "step-about",
      type: "info",
      title: "Over 1 million men",
      subtitle: "have trusted us to get in shape",
      buttonText: "Got it",
    },
    {
      id: 2,
      route: "step-ever-bg",
      question: "Have you ever trained with calisthenics before?",
      type: "single",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      route: "step-info",
      type: "info",
      title: "You're in the right place",
      subtitle:
        "Our Calisthenics Program is built for men of every fitness level.\n\nWe'll get you in serious shape at home — no gym required.",
      buttonText: "Got it",
    },
    {
      id: 4,
      route: "step-goal",
      question: "What's your main goal right now?",
      type: "single",
      options: [
        "Lose fat",
        "Build muscle / size",
        "Get lean & defined",
        "Improve endurance",
        "Stay healthy & mobile",
      ],
    },
    {
      id: 5,
      route: "step-info-icon",
      type: "info",
      title: "Solid choice.",
      subtitle:
        "We'll build your training plan around that main goal.",
      buttonText: "Continue",
    },
    {
      id: 6,
      route: "step-additional-goals",
      question: "Any secondary goals? (Select all that apply)",
      type: "multiple",
      options: [
        "More daily energy",
        "Reduce stress",
        "Fix posture",
        "Improve flexibility / mobility",
        "Boost confidence",
        "None",
      ],
    },
    {
      id: 7,
      route: "step-bodytype-grid",
      question: "Which one looks most like your body right now?",
      type: "single",
      options: ["Slim", "Average", "Plus-sized", "Overweight"],
    },
    {
      id: 8,
      route: "step-target-body-grid",
      question: "What's your target physique?",
      type: "single",
      options: [
        "Lean & defined",
        "Athletic",
        "Muscular / Bulk",
        "Strong & powerful",
      ],
    },
    {
      id: 9,
      route: "step-fitness-experience-bg",
      question: "What's your current training level?",
      type: "single",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      id: 10,
      route: "step-best-shape-bg",
      question: "When were you in your best shape physically?",
      type: "single",
      options: [
        "Right now",
        "1-2 years ago",
        "3-5 years ago",
        "5+ years ago",
        "Haven't felt in great shape yet",
      ],
    },
    {
      id: 11,
      route: "step-flexible-bg",
      question: "How's your mobility / flexibility?",
      type: "single",
      options: [
        "Very stiff",
        "Below average",
        "Average",
        "Above average",
        "Very flexible",
      ],
    },
    {
      id: 12,
      route: "step-problem-areas-bg",
      question:
        "Which areas do you want to focus on most? (Select all that apply)",
      type: "multiple",
      options: [
        "Arms",
        "Abs / Belly",
        "Chest",
        "Back",
        "Legs",
        "Glutes",
        "None",
      ],
    },
    {
      id: 13,
      route: "step-special-programs-bg",
      question: "Any focus you'd definitely want included?",
      type: "multiple",
      options: [
        "Core / abs",
        "Upper body strength",
        "Leg power",
        "Full body conditioning",
        "Mobility / flexibility work",
      ],
    },
    {
      id: 14,
      route: "step-info-special",
      type: "info",
      title: "Dialing it in...",
      subtitle:
        "We're customizing your strength & conditioning roadmap.",
      buttonText: "Continue",
    },
    {
      id: 15,
      route: "step-breath-bg",
      question: "Do you get out of breath easily from simple effort (stairs, light jog, etc.)?",
      type: "single",
      options: [
        "Very easily",
        "Somewhat easily",
        "Not really",
        "Not at all",
      ],
    },
    {
      id: 16,
      route: "step-workout-frequency-bg",
      question: "How many days per week do you want to train?",
      type: "single",
      options: [
        "2-3 days / week",
        "3-4 days / week",
        "4-5 days / week",
        "5-6 days / week",
        "Every day",
      ],
    },
    {
      id: 17,
      route: "step-walk-bg",
      question: "How much do you walk on a typical day?",
      type: "single",
      options: ["<30 min", "30-60 min", "1-2 hours", "2+ hours"],
    },
    {
      id: 18,
      route: "step-workout-duration-bg",
      question: "How long can you realistically train per session?",
      type: "single",
      options: [
        "15-20 minutes",
        "20-30 minutes",
        "30-45 minutes",
        "45-60 minutes",
        "60+ minutes",
      ],
    },
    {
      id: 19,
      route: "step-work-schedule",
      question: "Which best describes your work schedule?",
      type: "single",
      options: [
        "Regular 9-5",
        "Irregular hours / rotating",
        "Night shifts",
        "Work from home / remote",
        "Not currently working",
      ],
    },
    {
      id: 20,
      route: "step-typical-day",
      question: "Overall activity level during a normal day?",
      type: "single",
      options: [
        "Very active (on feet a lot)",
        "Moderately active",
        "Somewhat active",
        "Mostly sitting",
      ],
    },
    {
      id: 21,
      route: "step-energy-level",
      question: "How's your general energy level?",
      type: "single",
      options: ["Very low", "Low", "Moderate", "High", "Very high"],
    },
    {
      id: 22,
      route: "step-info-energy",
      type: "info",
      title: "We'll work with your energy, not against it",
      subtitle:
        "Your plan will match your recovery, stress, and daily demands — not just push 'no pain no gain'.",
      buttonText: "Continue",
    },
    {
      id: 23,
      route: "step-water",
      question: "On average, how much water do you drink per day?",
      type: "single",
      options: [
        "Under 4 glasses",
        "4-6 glasses",
        "6-8 glasses",
        "8-10 glasses",
        "10+ glasses",
      ],
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
        "8+ hours",
      ],
    },
    {
      id: 25,
      route: "step-diets",
      question: "Do you follow any specific nutrition style?",
      type: "single",
      options: [
        "No specific plan",
        "Low carb / cutting carbs",
        "High protein",
        "Vegetarian",
        "Vegan",
        "Keto",
        "Other",
      ],
    },
    {
      id: 26,
      route: "step-habits",
      question:
        "Which eating habits sound like you? (Select all that apply)",
      type: "multiple",
      options: [
        "I eat breakfast consistently",
        "I snack a lot",
        "Late night eating",
        "Meal prep / cook ahead",
        "Eat out / delivery a lot",
      ],
    },
    {
      id: 27,
      route: "step-crave",
      question: "What do you crave the most? (Select all that apply)",
      type: "multiple",
      options: [
        "Sweet stuff",
        "Salty snacks",
        "Fried / fast food",
        "Carbs / bread / pasta",
        "Nothing specific",
      ],
    },
    {
      id: 28,
      route: "step-eating-habits",
      question: "How would you rate your nutrition right now?",
      type: "single",
      options: [
        "Very clean / on point",
        "Mostly good",
        "Average",
        "Could be better",
        "Not great",
      ],
    },
    {
      id: 29,
      route: "step-life-events",
      question:
        "Anything recently that affects how you train or recover? (Select all that apply)",
      type: "multiple",
      options: [
        "Injury / recovery",
        "Illness",
        "High stress / burnout",
        "Major life change",
        "None",
      ],
    },
    {
      id: 30,
      route: "step-measures",
      question: "What's your height?",
      type: "input",
      inputType: "text",
      placeholder: 'Enter your height (e.g. 5\'10" or 178 cm)',
    },
    {
      id: 31,
      route: "step-current-weight-bmi",
      question: "Current weight?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your current weight (e.g. 180 lbs or 82 kg)",
    },
    {
      id: 32,
      route: "step-target-weight-banner",
      question: "Target weight / goal weight?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your target weight",
    },
    {
      id: 33,
      route: "step-date-of-birth",
      question: "What's your date of birth?",
      type: "input",
      inputType: "date",
      placeholder: "MM/DD/YYYY",
    },
    {
      id: 34,
      route: "step-summary",
      type: "info",
      title: "Almost done",
      subtitle:
        "Just a few final details so we can lock in your plan.",
      buttonText: "Continue",
    },
    {
      id: 35,
      route: "step-event",
      question: "Are you training for something specific?",
      type: "single",
      options: [
        "Wedding",
        "Vacation / beach",
        "Reunion / meetup",
        "Photo / video shoot",
        "Competition / sports test",
        "No specific event",
      ],
    },
    {
      id: 36,
      route: "step-event-date",
      question: "When is it?",
      type: "input",
      inputType: "date",
      placeholder: "MM/DD/YYYY",
      conditional: true, // só aparece se tiver evento
    },
    {
      id: 37,
      route: "step-event-chart",
      type: "info",
      title: "Your progress timeline",
      subtitle:
        "Here's what your next weeks can look like if you stick to the plan.",
      buttonText: "Continue",
    },
    {
      id: 38,
      route: "step-main-goals",
      question:
        "Lock in your top goals (Select all that apply)",
      type: "multiple",
      options: [
        "Lose fat",
        "Build muscle / size",
        "Look more defined",
        "Get stronger",
        "Improve mobility / flexibility",
        "Better conditioning / endurance",
      ],
    },
    {
      id: 39,
      route: "step-confident",
      question:
        "How confident are you that you can follow the plan we build for you?",
      type: "single",
      options: [
        "Not confident",
        "Somewhat confident",
        "Confident",
        "Very confident",
        "Unstoppable",
      ],
    },
    {
      id: 40,
      route: "step-email",
      question: "What's your email?",
      type: "input",
      inputType: "email",
      placeholder: "Enter your email",
    },
    {
      id: 41,
      route: "step-name",
      question: "What's your name?",
      type: "input",
      inputType: "text",
      placeholder: "Enter your name",
    },
    {
      id: 42,
      type: "info",
      title: "Building your custom plan...",
      subtitle:
        "Strength, conditioning, mobility, and nutrition — tuned for you.",
      buttonText: "Show my plan",
      isLoading: true,
    },
    {
      id: 43,
      type: "info",
      title: "Your plan is ready",
      subtitle:
        "You're about to start training like an athlete. Let's go.",
      buttonText: "Get started",
      isFinal: true,
    },
  ];

  // ===== Handlers =====
  const goNext = () => {
    setCurrentQuestion((q) => {
      if (q < questions.length - 1) return q + 1;
      return q;
    });
  };

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));

    setCurrentQuestion((q) => {
      if (q < questions.length - 1) return q + 1;
      return q;
    });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    if (input && input.value.trim()) {
      handleAnswer(input.value.trim());
    }
  };

  const handleMultipleChoice = (option) => {
    setAnswers((prev) => {
      const currentAns = prev[currentQuestion] || [];
      const newAns = currentAns.includes(option)
        ? currentAns.filter((a) => a !== option)
        : [...currentAns, option];
      return { ...prev, [currentQuestion]: newAns };
    });
  };

  const handleMultipleNext = () => {
    setCurrentQuestion((q) => {
      const hasAnswer =
        answers[q] && Array.isArray(answers[q]) && answers[q].length > 0;
      if (!hasAnswer) return q;
      if (q < questions.length - 1) return q + 1;
      return q;
    });
  };

  const handleBack = () => {
    setCurrentQuestion((q) => {
      if (q > 0) return q - 1;
      return q;
    });
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Decide como renderizar a imagem / ícone ao lado direito
  const renderCurrentVisual = () => {
    // tela final não mostra visual
    if (currentQ.isFinal) return null;

    // na pergunta 7 e 8, cada opção já tem img própria em grid -> não precisa painel lateral
    if (currentQ.id === 7 || currentQ.id === 8) return null;

    const raw = questionImages[currentQ.id] || modelStep1;

    // JSX (ex: ícone de peso)
    if (React.isValidElement(raw)) {
      return (
        <div className="mt-8 md:mt-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-[180px] md:w-[220px] h-[180px] md:h-[220px] bg-[#1a1a1a] rounded-lg border border-orange-500/40">
            {raw}
          </div>
        </div>
      );
    }

    // string = src imagem
    if (typeof raw === "string") {
      return (
        <div className="mt-8 md:mt-0 flex items-center justify-center">
          <img
            src={raw}
            alt={`Step ${currentQ.id}`}
            className="w-[180px] md:w-[220px] object-contain"
          />
        </div>
      );
    }

    // objeto (mapa de opções -> imagem) não renderiza aqui
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-2">
          <div className="border border-orange-500 px-2 py-1 text-sm font-bold">
            MAD
          </div>
          <div className="border border-orange-500 bg-orange-500 px-2 py-1 text-sm font-bold text-black">
            MUSCLE
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
          {currentQ.type === "info" ? (
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {currentQ.title}
              </h1>
              <p className="text-lg text-gray-300 whitespace-pre-line">
                {currentQ.subtitle}
              </p>

              <button
                onClick={() => handleAnswer("info-acknowledged")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded transition flex items-center gap-2 mx-auto md:mx-0"
              >
                {currentQ.buttonText} →
              </button>
            </div>
          ) : (
            <>
              {/* Pergunta */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                {currentQ.question}
              </h2>

              {/* Single Choice ESPECIAL para id 4 (objetivo principal com cards e imagens) */}
              {currentQ.type === "single" && currentQ.id === 4 && (
                <div className="flex flex-col gap-6 w-full max-w-xl mx-auto md:mx-0">
                  <button
                    onClick={() => handleAnswer("Lose fat")}
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">
                        Lose fat
                      </span>
                    </div>
                    <img
                      src={step4LoseWeight}
                      alt="Lose fat"
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </button>

                  <button
                    onClick={() =>
                      handleAnswer("Get fit / maintain weight")
                    }
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">
                        Get fit / maintain weight
                      </span>
                    </div>
                    <img
                      src={step4GetFit}
                      alt="Get fit / maintain weight"
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </button>

                  <button
                    onClick={() =>
                      handleAnswer("Build muscle & strength")
                    }
                    className="flex items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-lg overflow-hidden border border-transparent hover:border-orange-500 transition group"
                  >
                    <div className="flex-1 flex flex-col items-start justify-center px-6 py-6">
                      <span className="text-lg md:text-xl font-semibold text-white mb-2">
                        Build muscle & strength
                      </span>
                    </div>
                    <img
                      src={step4Musclar}
                      alt="Build muscle & strength"
                      className="w-[120px] h-[120px] object-contain"
                    />
                  </button>
                </div>
              )}

              {/* Single Choice ESPECIAL para id 7 e 8 (bodytype grid com imagens) */}
              {currentQ.type === "single" &&
                (currentQ.id === 7 || currentQ.id === 8) && (
                  <div className="w-full flex flex-wrap justify-center gap-6 md:gap-8">
                    {currentQ.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(option)}
                        className="flex flex-col items-center text-left"
                      >
                        {/* Card */}
                        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden w-[140px] md:w-[180px]">
                          {/* Área da imagem */}
                          <div className="w-full h-[220px] md:h-[300px] flex items-center justify-center bg-black">
                            <img
                              src={questionImages[currentQ.id][option]}
                              alt={option}
                              className="max-h-full max-w-full object-cover"
                            />
                          </div>

                          {/* Barra com o texto */}
                          <div className="w-full py-3 text-center bg-[#3a3a3a]">
                            <span className="text-white text-sm md:text-base font-semibold">
                              {option}
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

              {/* Single Choice padrão (qualquer single que NÃO seja 4,7,8) */}
              {currentQ.type === "single" &&
                currentQ.id !== 4 &&
                currentQ.id !== 7 &&
                currentQ.id !== 8 && (
                  <div className="flex flex-col space-y-3 w-full max-w-[320px] mx-auto md:mx-0">
                    {currentQ.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="flex justify-between items-center bg-[#1a1a1a] hover:bg-[#2a2a2a] py-3 px-5 rounded transition border border-transparent hover:border-orange-500"
                      >
                        <span>{option}</span>
                        <span className="text-orange-500 text-lg">→</span>
                      </button>
                    ))}
                  </div>
                )}

              {/* Multiple Choice */}
              {currentQ.type === "multiple" && (
                <div className="w-full max-w-[320px] mx-auto md:mx-0">
                  <div className="flex flex-col space-y-3 mb-6">
                    {currentQ.options.map((option, index) => {
                      const isSelected = answers[currentQuestion]?.includes(
                        option
                      );
                      return (
                        <button
                          key={index}
                          onClick={() => handleMultipleChoice(option)}
                          className={`flex justify-between items-center py-3 px-5 rounded transition border ${
                            isSelected
                              ? "bg-orange-500 border-orange-500 text-white"
                              : "bg-[#1a1a1a] border-transparent hover:bg-[#2a2a2a] hover:border-orange-500"
                          }`}
                        >
                          <span>{option}</span>
                          {isSelected && (
                            <span className="text-xl font-bold leading-none">
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={handleMultipleNext}
                    disabled={
                      !answers[currentQuestion] ||
                      answers[currentQuestion].length === 0
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
                    type={currentQ.inputType || "text"}
                    placeholder={currentQ.placeholder}
                    defaultValue={answers[currentQuestion] || ""}
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

        {/* Painel visual dinâmico à direita */}
        {renderCurrentVisual()}
      </div>
    </div>
  );
}

export default App;
