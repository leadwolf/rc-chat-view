import React from 'react';
import PropTypes from 'prop-types';

/* eslint react/no-array-index-key: 0 */

const TypingIndicator = ({ nDots }) => (
    <div className="typing-indicator">
        {Array.from(Array(nDots)).map((dot, index) => (
            <span key={index} />
        ))}
    </div>
);

TypingIndicator.propTypes = {
    nDots: PropTypes.number,
};

TypingIndicator.defaultProps = {
    nDots: 3,
};

export default TypingIndicator;
