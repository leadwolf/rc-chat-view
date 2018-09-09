import React, { Component } from 'react';
import '../assets/styles/footer.css';
import Typography from '@material-ui/core/Typography';
import monsterImgUrl from '../assets/monster.png';

const Footer = () => (
    <div className="demo-footer">
        <img className="demo-monster-img" src={monsterImgUrl} alt="monster" />
        <div className="demo-footer--information">
            <Typography variant="body2" color="textSecondary" paragraph align="left">
                Copyright 2018. Christopher Caroni
                <br />
                All rights reserved
            </Typography>
        </div>
    </div>
);

export default Footer;
