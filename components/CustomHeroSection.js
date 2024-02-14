import React from 'react';

const HeroSection = (props) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-6">
            <div className="max-w-6xl w-full flex justify-between items-center space-x-6">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-5xl font-bold">Magnificent things are very simple</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors">
                            Get Started
                        </button>
                        <button className="px-6 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img
                        alt="Leaf"
                        src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
                        className="object-cover w-96 h-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
