﻿import React from 'react';
import PropTypes from 'prop-types';

import Link from './components/Link';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: this.props.icons,
            quotes: [],
            quoteText: '',
            quoteAuthor: '',
            error: false
        };
    }

    handleError(error) {
        console.error(error);
    }

    componentWillMount() {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener('load', () => {
            switch (xhr.status) {
                case 200:
                    console.log(xhr.response);
                    break;
                case 400:
                    this.handleError('Произошла ошибка сервера: неверный запрос');
                    break;
                case 404:
                    this.handleError('Произошла ошибка сервера: запрашиваемый ресурс не найден');
                    break;
                case 500:
                    this.handleError('Произошла внутренняя ошибка сервера');
                    break;
                default:
                    this.handleError('Произошла ошибка сервера: ' + xhr.status + ' ' + xhr.statusText);
            }
        });

        xhr.addEventListener('error', () => {
            this.handleError('Произошла ошибка соединения');
        });

        xhr.addEventListener('timeout', () => {
            this.handleError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
        });

        xhr.timeout = 10000; // 10 seconds
        xhr.open('GET', 'http://www.mocky.io/v2/5cbc08053200007b0680d7cb', true);
        xhr.send();
    }

    componentDidMount() {
               
    }

    render() {
        return (
            <main className="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <span>Hello</span>
                </div>
                <div className="quote-author">- Albert Einstein</div>
                <div className="buttons">
                    {this.props.icons.map((icon) => {
                        return <Link
                                    key={icon.id}
                                    id={icon.id}
                                    className={icon.iconName}
                                />
                    })
                    }
                    <button href="#" className="new-quote">New quote</button>
                </div>
            </main>
        );
    }
}

App.propTypes = {
    icons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        iconName: PropTypes.string.isRequired
    }))
};

export default App;
