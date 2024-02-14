"use client";

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
const Joyride = dynamic(() => import('react-joyride'), { ssr: false });

const Question = (props) => {
    return (
        <div className="flex flex-col gap-4">
            <span className="font-bold text-lg leading-6">{props.Question}</span>
            <span className="text-gray-800 leading-6">{props.Answer}</span>
        </div>
    );
};

Question.defaultProps = {
    Answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
    Question: 'What types of cars do you sell?',
};

Question.propTypes = {
    Answer: PropTypes.string,
    Question: PropTypes.string,
};

const FAQ = (props) => {
    const [run, setRun] = useState(true); // Start the tour by default
    const [steps] = useState([
        {
            target: '.test-heading',
            content: 'This section contains frequently asked questions to help you understand our services.',
            placement: 'top',
        },
        {
            target: '.question-section',
            content: 'Here you can find information about what a landing page dashboard is.',
            placement: 'top',
        },
        {
            target: '.question-3',
            content: 'Learn about the types of charts and graphs included in our dashboards.',
            placement: 'top',
        },
        // Add more steps as needed
    ]);

    return (
        <div className={`faq-section flex flex-col md:flex-row gap-8 p-16 w-full max-w-screen-xl ${props.rootClassName}`}>
            <Joyride
                continuous
                run={run}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
            <div className="test-heading flex flex-col items-start max-w-xs md:max-w-[35%]">
                <span className="text-blue-800 font-semibold mb-6 text-lg">
                    FAQ
                </span>
                <h2 className="font-semibold text-2xl mb-6">{props.heading}</h2>
                <span className="text-gray-800 text-base leading-6">
                    Here are some of the most common questions that we get.
                </span>
            </div>
            <div className="question-section flex flex-col gap-6">
                <Question
                    className="question-1"
                    Answer="A landing page dashboard is a tool that provides an overview of key metrics and data related to a landing page. It typically includes charts and graphs to visually represent the data."
                    Question="What is a landing page dashboard?"
                />
                <Question
                    Answer="A professional landing page dashboard can help you track the performance of your landing page, identify areas for improvement, and make data-driven decisions to optimize your conversion rates."
                    Question="Why do I need a professional landing page dashboard?"
                />
                <Question
                    Answer="A professional landing page dashboard may include various types of charts and graphs such as line charts, bar charts, pie charts, and area charts. These visual representations can help you understand trends, compare data, and analyze performance."
                    Question="What types of charts and graphs are included in a professional landing page dashboard?"
                />
                <Question
                    Answer="Yes, most professional landing page dashboards offer customization options. You can often choose the type of chart or graph, select specific data to display, adjust colors and styles, and more."
                    Question="Can I customize the charts and graphs in the landing page dashboard?"
                />
                <Question
                    Answer="By providing real-time data and insights, a landing page dashboard allows you to identify which elements of your landing page are performing well and which ones may need improvement. This information can help you make data-driven optimizations to increase your conversion rates."
                    Question="How can a landing page dashboard help me improve my conversion rates?"
                />
            </div>
        </div>
    );
};

FAQ.defaultProps = {
    rootClassName: '',
    heading: 'Common questions',
};

FAQ.propTypes = {
    rootClassName: PropTypes.string,
    heading: PropTypes.string,
};

export default FAQ;
