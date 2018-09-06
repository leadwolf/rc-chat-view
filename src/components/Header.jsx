import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../assets/close-icon.png';
import '../styles/header.css';

const Header = ({ imageUrl, headerName, onClose }) => (
    <div className="sc-header">
        <div className="sc-header--img">
            {imageUrl && <img className="sc-header--img" src={imageUrl} alt="" />}
        </div>
        <div className="sc-header--team-name"> {headerName} </div>
        <div className="sc-header--close-button" onClick={onClose}>
            <img src={closeIcon} alt="" />
        </div>
    </div>
);

Header.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    headerName: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Header;
