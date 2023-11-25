"use client";

import { useState, useEffect, useRef } from "react";

const questions_tech = [
  {
    question: "How comfortable are you with using basic computer software (e.g., word processors, spreadsheets)?",
    options: ["Not comfortable", "Somewhat comfortable", "Very comfortable"],
    solutions: {
      "Not comfortable": "Beginner-level tutorials and courses can be a great starting point. Look for online resources or local community classes that offer introductions to word processing and spreadsheets.",
      "Somewhat comfortable": "Consider intermediate courses to enhance your skills. YouTube tutorials can be particularly helpful for learning specific tasks or features.",
      "Very comfortable": "Explore advanced features of these tools or start learning about integrated software solutions, like CRM systems or advanced data analysis tools in spreadsheets."
    }
  },
  {
    question: "Do you have experience with any advanced technology skills (e.g., programming, data analysis)?",
    options: ["No experience", "Some experience", "Extensive experience"],
    solutions: {
      "No experience": "Start with introductory courses in programming or data analysis. Websites like Codecademy or DataCamp offer beginner-friendly courses.",
      "Some experience": "Focus on building specific projects or learning more complex aspects of the skills you already possess. Online resources and specialized boot camps can be great for this stage.",
      "Extensive experience": "Consider staying updated with the latest advancements in your field. Attending industry conferences and participating in advanced workshops could be beneficial."
    }
  },
  {
    question: "How often do you learn about or adapt to new technology tools in your work?",
    options: ["Rarely", "Sometimes", "Often"],
    solutions: {
      "Rarely": "Set aside time regularly to explore emerging technologies relevant to your field. Subscribing to tech newsletters can keep you informed.",
      "Sometimes": "Try to engage more proactively with new tools. Experiment with different technologies that could improve your workflow.",
      "Often": "Explore cutting-edge technologies or participate in beta testing of new tools. Staying active in tech forums and attending industry events can provide insights."
    }
  }
];

const questions_social_emotional = [
  {
    question: "How would you rate your ability to work effectively in a team?",
    options: ["Poor", "Good", "Excellent"],
    solutions: {
      "Poor": "Consider participating in team-building exercises or workshops to improve teamwork skills. Learning about effective communication and conflict resolution can also be beneficial.",
      "Good": "Build on your teamwork skills by taking on collaborative projects or roles that require coordination with others. Actively seek feedback from team members to identify areas for improvement.",
      "Excellent": "Continue to nurture your teamwork skills by mentoring others or leading team initiatives. Consider exploring advanced collaboration strategies and leadership development opportunities."
    }
  },
  {
    question: "How often do you engage in tasks that require negotiation?",
    options: ["Rarely", "Occasionally", "Frequently"],
    solutions: {
      "Rarely": "Start by studying basic negotiation techniques. Practice these skills in low-stakes environments to build confidence.",
      "Occasionally": "Enhance your negotiation skills by actively seeking opportunities to use them. Attend workshops or courses to learn more sophisticated strategies.",
      "Frequently": "Since you frequently engage in negotiation, consider advanced training in these areas. You might also benefit from learning about cross-cultural negotiation or high-stakes deal-making."
    }
  },
  {
    question: "Can you provide an example of when you had to resolve a conflict or manage a difficult workplace relationship?",
    options: ["Never", "A few times", "Regularly"],
    solutions: {
      "Never": "Learn about conflict resolution techniques and strategies. Engage in role-playing exercises to prepare for potential future conflicts.",
      "A few times": "Reflect on past experiences to understand what strategies worked or didn't work. Seek out resources or training that can provide new perspectives on conflict resolution.",
      "Regularly": "Consider advanced conflict management courses or certifications. You might also benefit from exploring mediation or counseling techniques to handle complex situations."
    }
  }
];

const questions_cognitive = [
  {
    question: "How often do you engage in tasks that require creative thinking or problem-solving?",
    options: ["Rarely", "Sometimes", "Often"],
    solutions: {
      "Rarely": "To enhance your creative thinking and problem-solving skills, try engaging in activities that challenge your usual way of thinking, such as brainstorming sessions, puzzles, or creative hobbies.",
      "Sometimes": "Build on your existing problem-solving skills by taking on diverse and challenging projects. Seek out opportunities for lateral thinking and cross-disciplinary collaboration.",
      "Often": "Continue developing your problem-solving abilities by exploring advanced techniques, like design thinking. Consider sharing your knowledge through mentoring or workshops."
    }
  },
  {
    question: "How often are you faced with a situation where you had to analyze complex information to make a decision.",
    options: ["Never", "Occasionally", "Often"],
    solutions: {
      "Never": "Start developing your analytical skills by engaging with educational content that involves critical thinking and data analysis. Practice with case studies or simulations.",
      "Occasionally": "Enhance your decision-making skills by exposing yourself to more complex information. Workshops or courses in data analysis, logic, or strategic thinking can be beneficial.",
      "Often": "Since you frequently analyze complex information, consider advanced training in data science, statistical analysis, or strategic decision-making to refine your expertise."
    }
  },
  {
    question: "How comfortable are you with learning new concepts or skills outside your current expertise?",
    options: ["Not comfortable", "Somewhat comfortable", "Very comfortable"],
    solutions: {
      "Not comfortable": "Begin with small steps in familiar areas adjacent to your expertise. Use online resources for beginner-friendly introductions to new concepts and gradually expand your learning scope.",
      "Somewhat comfortable": "Challenge yourself by delving into new subjects related to your interests or work. Participate in workshops or courses to gain structured learning experiences.",
      "Very comfortable": "Leverage your comfort in learning new skills by exploring diverse and advanced topics. Engage in interdisciplinary studies or projects to apply and integrate different knowledge areas."
    }
  }
];

const questions_future_proof = [
  {
    question: "Are there areas in your current role that you think could be automated or replaced by AI?",
    options: ["None", "Some aspects", "Many aspects"],
    solutions: {
      "None": "Even if your current role doesn't seem directly impacted by automation or AI, it's wise to stay informed about technological trends in your industry to anticipate future changes.",
      "Some aspects": "Identify the aspects of your job that could be automated and consider upskilling in areas that are less likely to be affected by AI, such as creative problem-solving or interpersonal skills.",
      "Many aspects": "If many aspects of your role could be automated, focus on learning new skills that complement AI, like data interpretation, AI ethics, or overseeing and improving AI systems."
    }
  },
  {
    question: "What new skills or knowledge areas are you interested in learning to enhance your career prospects?",
    options: ["Not interested", "Somewhat interested", "Very interested"],
    solutions: {
      "Not interested": "Consider exploring different fields or industries to find new areas that might spark your interest. Keeping your skills relevant is key to career longevity.",
      "Somewhat interested": "Identify specific areas that align with your interests and career goals. Look for online courses, workshops, or industry seminars to gradually build your knowledge and skills.",
      "Very interested": "Leverage your enthusiasm by actively seeking out learning opportunities in your areas of interest. Consider certifications, advanced courses, or even degrees to deeply immerse yourself in new knowledge."
    }
  },
  {
    question: "How often do you set aside time for professional development or learning new skills?",
    options: ["Rarely", "Occasionally", "Frequently"],
    solutions: {
      "Rarely": "Start by setting achievable goals for professional development, such as dedicating a few hours each week to learning a new skill or attending a webinar relevant to your industry.",
      "Occasionally": "Build a more structured approach to your professional development. Plan regular learning sessions and set specific objectives to track your progress.",
      "Frequently": "Since you frequently focus on professional development, consider diversifying your learning sources and methods. Engage in mentorship, join professional networks, or attend industry conferences."
    }
  }
];



const Questionnaire = ({ questions }) => {
  const [responses, setResponses] = useState({});
  const [solutions, setSolutions] = useState(null);

  const handleChange = (questionIndex, option) => {
    setResponses({ ...responses, [questionIndex]: option });
  };

  const calculateSolutions = () => {
    const calculatedSolutions = questions.map((item, index) => {
      const response = responses[index];
      return response ? item.solutions[response] : null;
    });
    return calculatedSolutions;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedSolutions = calculateSolutions();
    setSolutions(calculatedSolutions);
    console.log(responses);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">{item.question}</label>
            <div className="flex flex-col">
              {item.options.map((option, optionIndex) => (
                <label key={optionIndex} className="inline-flex items-center mt-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleChange(index, option)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-900">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="btn btn-primary btn-md">
          Check Results
        </button>
      </form>

      {solutions && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Your Solutions:</h3>
          <ul className="list-disc pl-5">
            {solutions.map((solution, index) => (
              <li key={index} className="mt-2">{solution || 'No solution selected for this question.'}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const features = [
  {
    name: "Technical skills",
    description: (
      <>
        <Questionnaire questions={questions_tech} />
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    ),
  },
  {
    name: "Social and Emotional Skills",
    description: (
      <>
        <Questionnaire questions={questions_social_emotional} />
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    ),
  },
  {
    name: "Cognitive Skills",
    description: (
      <>
        <Questionnaire questions={questions_cognitive} />
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        {/* Inserted the provided SVG path here */}
        <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"></path>
      </svg>
    ),
  },
  {
    name: "Future-proofing Skills",
    description: (
      <>
        <Questionnaire questions={questions_future_proof} />
      </>
    ),
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"></path>
      </svg>
    ),
  },
];

const FeaturesListicle = () => {
  const featuresEndRef = useRef(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className="py-24" id="features">
      <div className="max-w-3xl mx-auto">
        <div className="bg-base-100 max-md:px-8 max-w-3xl">
          <p className="text-accent font-medium text-sm font-mono mb-3">
            const launch_time = &quot;Today&quot;;
          </p>
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-8">
            {/* 💡 COPY TIP: Remind visitors about the value of your product. Why do they need it? */}
            Supercharge your app instantly, launch faster, make $
          </h2>
          <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
            {/* 💡 COPY TIP: Explain how your product delivers what you promise in the headline. */}
            Login users, process payments and send emails at lightspeed. Spend
            your time building your startup, not integrating APIs. ShipFast
            provides you with the boilerplate code you need to launch, FAST.
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 max-w-3xl mx-auto mb-8">
          {features.map((feature) => (
            <span
              key={feature.name}
              onClick={() => {
                if (!hasClicked) setHasClicked(true);
                setFeatureSelected(feature.name);
              }}
              className={`flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group`}
            >
              <span
                className={`duration-100 ${featureSelected === feature.name
                  ? "text-primary"
                  : "text-base-content/30 group-hover:text-base-content/50"
                  }`}
              >
                {feature.svg}
              </span>
              <span
                className={`font-semibold text-sm ${featureSelected === feature.name
                  ? "text-primary"
                  : "text-base-content/50"
                  }`}
              >
                {feature.name}
              </span>
            </span>
          ))}
        </div>
        <div className="bg-base-200">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
            <div
              className="text-base-content/80 leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity"
              key={featureSelected}
            >
              <h3 className="font-semibold text-base-content text-lg">
                {features.find((f) => f.name === featureSelected)["name"]}
              </h3>
              {features.find((f) => f.name === featureSelected)["description"]}
            </div>
          </div>
        </div>
      </div>
      {/* Just used to know it's the end of the autoscroll feature (optional, see useEffect) */}
      <p className="opacity-0" ref={featuresEndRef}></p>
    </section>
  );
};

export default FeaturesListicle;
