import React from 'react';
import PropTypes from 'prop-types';

const HeaderCircular = (props) => {
    return (
        <div className={`bg-blue-800 py-6 ${props.rootClassName}`}>
            <header className="flex justify-between items-center w-11/12 max-w-6xl mx-auto bg-white py-6 px-12 rounded-full sticky top-0">
                <span className="text-2xl font-bold uppercase">{props.Logo}</span>
                <div className="hidden md:flex justify-between flex-1">
                    <nav className="flex flex-1 justify-center items-center">
                        <span className="hover:text-teal-700 transition-colors mx-4">{props.Nav1}</span>
                        <span className="hover:text-teal-700 transition-colors mx-4">{props.Nav2}</span>
                        <span className="hover:text-teal-700 transition-colors mx-4">{props.Nav3}</span>
                        <span className="hover:text-teal-700 transition-colors mx-4">{props.Nav4}</span>
                        <span className="hover:text-teal-700 transition-colors mx-4">{props.Nav5}</span>
                    </nav>
                    <div className="flex items-center">
                        <button className="border border-blue-900 mx-4 py-2 px-6 rounded-full">{props.Login}</button>
                        <button className="bg-blue-900 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-700 transition-colors">{props.Register}</button>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    {/* SVG icons can be kept the same, make sure to include any relevant Tailwind classes for sizing or colors */}
                </div>
            </header>
        </div>
    );
};

HeaderCircular.defaultProps = {
    Logo: 'PROFESSIONAL',
    Nav1: 'About',
    Nav2: 'Features',
    Nav3: 'Pricing',
    Nav4: 'Team',
    Nav5: 'Blog',
    Login: 'Login',
    Register: 'Register',
    rootClassName: '',
};

HeaderCircular.propTypes = {
    Logo: PropTypes.string,
    Nav1: PropTypes.string,
    Nav2: PropTypes.string,
    Nav3: PropTypes.string,
    Nav4: PropTypes.string,
    Nav5: PropTypes.string,
    Login: PropTypes.string,
    Register: PropTypes.string,
    rootClassName: PropTypes.string,
};

export default HeaderCircular;
