import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../assets/close-icon.png';
import '../styles/header.css';

const Header = ({ imageUrl, teamName, onClose }) => (
    <div className="sc-header">
        <img className="sc-header--img" src={imageUrl} alt="" />
        <div className="sc-header--team-name"> {teamName} </div>
        <div className="sc-header--close-button" onClick={onClose}>
            <img src={closeIcon} alt="" />
        </div>
    </div>
);

Header.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Header;
