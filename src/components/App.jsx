import React from 'react';
import { string } from 'prop-types'
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container, Row, Col } from 'reactstrap';

const myFooterContent = 'Copyright © 2019';
const myMenu = [{
    text: 'Начать заново',
    fun: null,
}];
const myTitle = "Игра 'Крестики-Нолики'";

const App = ({ target }) => (
  <div>
    <Header title={myTitle} menu={myMenu}/>
    <Container />
    <Footer footerContent={myFooterContent} />
  </div>
);

App.propTypes = {
  target: string.isRequired
};

export default App;