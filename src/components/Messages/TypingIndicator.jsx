import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/messages/typingIndicator.css';

/* eslint react/no-array-index-key: 0 */

const TypingIndicator = ({ nDots }) => (
    <div className="typing-indicator-container">
        <div className="typing-indicator">
            {Array.from(Array(nDots)).map((dot, index) => (
                <span
                    key={index}
                    className="typing-indicator-dot"
                    style={{
                        animation: `1s blink infinite ${(1 / nDots) * (index + 1)}s`,
                    }}
                />
            ))}
        </div>
    </div>
);

TypingIndicator.propTypes = {
    nDots: PropTypes.number,
};

TypingIndicator.defaultProps = {
    nDots: 3,
};

export default TypingIndicator;
