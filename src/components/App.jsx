import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'reactstrap';
import Main from 'components/Main';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadCells } from 'actions/loadCells';

const App = (props) => {
  const myFooterContent = 'Copyright © 2019';
  const myTitle = "Игра 'Крестики-Нолики'";
  const myMenu = [{
    text: 'Начать заново',
    fun: props.loadCells,
  }];

  return (
    <div>
      <Header title={myTitle} menu={myMenu} />
      <Container>
        <Main />
      </Container>
      <Footer footerContent={myFooterContent} />
    </div>
  );
}

App.propTypes = {
  loadCells: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({ loadCells: () => dispatch(loadCells()) })
)(App);