import React from 'react';
import PropTypes from 'prop-types';

import closeIcon from '../assets/close-icon.png';
import '../styles/header.css';

const Header = ({ imageUrl, headerName, onClose, onHeaderNameClick }) => (
    <div className="sc-header">
        <div className="sc-header--img">
            {imageUrl && <img className="sc-header--img" src={imageUrl} alt="" />}
        </div>
        <div
            className={`sc-header--team-name ${headerName && onHeaderNameClick ? 'enabled' : ''}`}
            onClick={onHeaderNameClick}
        >
            {' '}
            {headerName}{' '}
        </div>
        <div className="sc-header--close-button" onClick={onClose}>
            <img src={closeIcon} alt="" />
        </div>
    </div>
);

Header.propTypes = {
    imageUrl: PropTypes.string,
    headerName: PropTypes.string,
    onHeaderNameClick: PropTypes.func,
    onClose: PropTypes.func.isRequired,
};

Header.defaultProps = {
    imageUrl: '',
    headerName: '',
    onHeaderNameClick: undefined,
};

export default Header;
