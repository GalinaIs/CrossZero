import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'reactstrap';
import Main from 'components/Main';
import { connect } from 'react-redux';
import { setNewGame } from 'actions/newGame';
import PropTypes from 'prop-types';

const App = (props) => {
  const myFooterContent = 'Copyright © 2019';
  const myMenu = [{
    text: 'Начать заново',
    fun: props.setNewGame,
  }];
  const myTitle = "Игра 'Крестики-Нолики'";
  const mySize = 3;
  const myCountCellsForWin = 3;

  return (
    <div>
      <Header title={myTitle} menu={myMenu} />
      <Container>
        <Main size={mySize} countCellsForWin={myCountCellsForWin} newGame={props.newGame} />
      </Container>
      <Footer footerContent={myFooterContent} />
    </div>
  );
}

App.propTypes = {
  newGame: PropTypes.number.isRequired,
  setNewGame: PropTypes.func.isRequired
};

export default connect(
  store => ({ newGame: store.newGameReducer.newGame }),
  dispatch => ({ setNewGame: () => dispatch(setNewGame()) })
)(App);