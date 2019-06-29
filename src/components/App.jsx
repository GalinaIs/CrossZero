import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'reactstrap';
import Main from 'components/Main';

const myFooterContent = 'Copyright © 2019';
const myMenu = [{
  text: 'Начать заново',
  fun: null,
}];
const myTitle = "Игра 'Крестики-Нолики'";
const mySize = 3;
const myCountCellsForWin = 3;

const App = () => (
  <div>
    <Header title={myTitle} menu={myMenu} />
    <Container>
      <Main size={mySize} countCellsForWin={myCountCellsForWin} />
    </Container>
    <Footer footerContent={myFooterContent} />
  </div>
);

export default App;