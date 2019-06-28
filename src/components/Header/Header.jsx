import React from 'react';
import PropTypes from 'prop-types';
import Menu from 'components/Menu';

const Header = ({ title, menu }) => (
    <header className="bg-dark">
        <div className="container">
            <Menu title={title} menu={menu} />
        </div>
    </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    func: PropTypes.func,
})),
};

export default Header;