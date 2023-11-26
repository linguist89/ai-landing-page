"use client";

import React, { useState } from 'react';

const Questionnaire = () => {
    const [responses, setResponses] = useState({});

    const questions = [
        {
            question: "How comfortable are you with using basic computer software (e.g., word processors, spreadsheets)?",
            options: ["Not comfortable", "Somewhat comfortable", "Very comfortable"]
        },
        {
            question: "Do you have experience with any advanced technology skills (e.g., programming, data analysis)?",
            options: ["No experience", "Some experience", "Extensive experience"]
        },
        {
            question: "How often do you learn about or adapt to new technology tools in your work?",
            options: ["Rarely", "Sometimes", "Often"]
        },
        {
            question: "How would you rate your ability to work effectively in a team?",
            options: ["Poor", "Good", "Excellent"]
        },
        {
            question: "How often do you engage in tasks that require negotiation or persuasion?",
            options: ["Rarely", "Occasionally", "Frequently"]
        },
        {
            question: "Can you provide an example of when you had to resolve a conflict or manage a difficult workplace relationship?",
            options: ["Never", "A few times", "Regularly"]
        },
        {
            question: "How often do you engage in tasks that require creative thinking or problem-solving?",
            options: ["Rarely", "Sometimes", "Often"]
        },
        {
            question: "Describe a situation where you had to analyze complex information to make a decision.",
            options: ["Never", "Occasionally", "Often"]
        },
        {
            question: "How comfortable are you with learning new concepts or skills outside your current expertise?",
            options: ["Not comfortable", "Somewhat comfortable", "Very comfortable"]
        },
        {
            question: "Are there areas in your current role that you think could be automated or replaced by AI?",
            options: ["None", "Some aspects", "Many aspects"]
        },
        {
            question: "What new skills or knowledge areas are you interested in learning to enhance your career prospects?",
            options: ["Not interested", "Somewhat interested", "Very interested"]
        },
        {
            question: "How often do you set aside time for professional development or learning new skills?",
            options: ["Rarely", "Occasionally", "Frequently"]
        }
    ];

    const handleChange = (questionIndex, option) => {
        setResponses({ ...responses, [questionIndex]: option });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <button type="submit" className="px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Questionnaire;
