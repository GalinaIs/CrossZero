import React from 'react';
import { string } from 'prop-types';

const Footer = ({footerContent}) => (
    <footer className="py-5 bg-dark navbar-fixed-bottom">
        <div className="container">
            <p className="m-0 text-center text-white">{footerContent}</p>
        </div>
    </footer>
);

Footer.propTypes = {
    footerContent: string,
};

Footer.defaultProps = {
    footerContent: ['® All rights reserved']
};

export default Footer;