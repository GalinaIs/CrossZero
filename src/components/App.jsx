import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container } from 'reactstrap';
import Main from 'components/Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNew: false
    };
  }

  beginNewGame = () => {
    this.setState({
      isNew: true
    });
  }

  myFooterContent = 'Copyright © 2019';
  myMenu = [{
    text: 'Начать заново',
    fun: this.beginNewGame,
  }];
  myTitle = "Игра 'Крестики-Нолики'";
  mySize = 3;
  myCountCellsForWin = 3;

  render() {
    return (
      <div>
        <Header title={this.myTitle} menu={this.myMenu} />
        <Container>
          <Main size={this.mySize} countCellsForWin={this.myCountCellsForWin} {...this.state}/>
        </Container>
        <Footer footerContent={this.myFooterContent} />
      </div>
    );
  }
}

export default App;