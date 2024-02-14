import React from 'react';
import PropTypes from 'prop-types';

const PrimaryPinkButton = (props) => {
    return (
        <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transition duration-150 ease-in px-6 py-3 rounded-full hover:scale-105">
            {props.button}
        </button>
    );
};

PrimaryPinkButton.defaultProps = {
    button: 'Button',
};

PrimaryPinkButton.propTypes = {
    button: PropTypes.string,
};

const OutlineGrayButton = (props) => {
    return (
        <button className="text-secondary-200 transition duration-150 ease-in px-6 py-3 border border-secondary-200 rounded-full hover:scale-105">
            {props.button}
        </button>
    );
};

OutlineGrayButton.defaultProps = {
    button: 'Button',
};

OutlineGrayButton.propTypes = {
    button: PropTypes.string,
};

const TestSection = (props) => {
    return (
        <div className="flex justify-center w-full relative max-w-[1320px] px-6 lg:px-12">
            <div className="flex relative w-full max-w-[1320px] min-h-[85vh] items-start flex-col justify-center">
                <div className="flex flex-col items-start w-3/5 p-12 z-10 shadow-lg mt-12 rounded-lg backdrop-blur-lg bg-white/80">
                    <h1 className="text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        {props.heading}
                    </h1>
                    <h1 className="text-center text-secondary-700 mb-6">
                        {props.heading1}
                    </h1>
                    <span className="text-secondary-600 mr-12 mb-4 pr-12">
                        Find the story of Creative Tim&apos;s most complex design
                        system and all the work that make this design available.
                    </span>
                    <div className="flex mt-6 items-start mb-4">
                        <div className="mr-4">
                            <PrimaryPinkButton button="contact us" />
                        </div>
                        <OutlineGrayButton button="read more" />
                    </div>
                    <div className="flex flex-wrap items-start justify-center mt-2 w-full">
                        {/* ...image elements */}
                    </div>
                </div>
            </div>
        </div>
    );
};

TestSection.defaultProps = {
    // ... same as before
};

TestSection.propTypes = {
    // ... same as before
};

export default TestSection;
