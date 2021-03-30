import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage';
import BookPage from '../pages/bookPage';
import GotService from '../../services/gotService';
import HousePage from '../pages/housePage/housePage';
import BooksItem from '../pages/booksItem/booksItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';




export default class App extends Component {

    gotService = new GotService();

    state = {
        randomCharStatus: true,
        selectedChar: null,
        selectedBook: null
    }

    onToggleRanndomChar = () => {
        const { randomCharStatus } = this.state;
        if (randomCharStatus) {
            this.setState({
                randomCharStatus: false
            });
        } else {
            this.setState({
                randomCharStatus: true
            });
        }
    }

    render() {
        const { randomCharStatus } = this.state;

        let randomCharVieu = null;

        if (randomCharStatus) {
            randomCharVieu = <RandomChar />;
        } else {
            randomCharVieu = null;
        }

        return (
            <Router> 
            {/* сначала всё оборачиваем в Router */}
                <div className='app'>
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {randomCharVieu}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                <button
                                    type="button"
                                    className="btn-trash btn-sm"
                                    onClick={this.onToggleRanndomChar}>
                                    Спрятать/Показать случайного персонажа
                            </button>
                            </Col>
                        </Row>

                        <Route path='/characters' component={CharacterPage}/>
                        {/* путь и название компонента */}
                        <Route path='/houses' component={HousePage}/>
                        {/* ссылки комбинируются и можно отрисовывать несклько компонентов по принципу цепчки ссылок. например /book/houses - отоброзит и книги и дома */}
                        {/* если есть атрибут exact,то не комбинируются */}
                        <Route exact path='/books' component={BookPage}/>
                        <Route path='/books/:id' render={
                            ({match})=>{

                                const {id} = match.params; //в обекте match в свойстве params содержится id
                                

                                return <BooksItem bookId={id}/> 
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};

 