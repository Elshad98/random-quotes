﻿import React from 'react';
import PropTypes from 'prop-types';
import Link from './components/Link';
import QuoteText from './components/QuoteText';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            quoteText: this.props.text,
            quoteAuthor: this.props.author,
            error: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleError(error) {
        console.error(error);
    }
    getRandom(array) {
        const randomElementIndex = Math.floor(Math.random() * array.length);
        return randomElementIndex;
    }
    handleSuccess(data) {
        this.setState({
            quotes: data
        });
    }
    handleClick() {
        const quotes = this.state.quotes;
        this.setState({
            quoteText: quotes[this.getRandom(quotes)].quoteText,
            quoteAuthor: quotes[this.getRandom(quotes)].quoteAuthor
        });
    }
    componentWillMount() {
        const xhr = new XMLHttpRequest();
        const URL = 'http://www.mocky.io/v2/5cbc3d51320000d90c80d836';
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            switch (xhr.status) {
                case 200:
                    this.handleSuccess(xhr.response);
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
                    this.handleError(`Произошла ошибка сервера: ${xhr.status} ${xhr.statusText}`);
            }
        });
        xhr.addEventListener('error', () => {
            this.handleError('Произошла ошибка соединения');
        });
        xhr.addEventListener('timeout', () => {
            this.handleError(`Запрос не успел выполниться за ${xhr.timeout} мс`);
        });
        xhr.timeout = 10000; // 10 seconds
        xhr.open('GET', URL, true);
        xhr.send();
    }
    render() {
        return (
            <main className="quote-box">
                <QuoteText className="quote-text" quoteText={this.state.quoteText} icon="fa fa-quote-left" />
                <div className="quote-author">- {this.state.quoteAuthor}</div>
                <div className="buttons">
                    {this.props.icons.map(icon =>
                        <Link
                            key={icon.id}
                            id={icon.id}
                            href={icon.href}
                            className={icon.iconName}
                        />)
                     }
                    <button href="#" className="new-quote" onClick={this.handleClick}>New quote</button>
                </div>
            </main>
        );
    }
}
App.propTypes = {
    text: PropTypes.string,
    author: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        iconName: PropTypes.string.isRequired
    }))
};
App.defaultProps = {
    text: 'Having nothing, nothing can he lose.',
    author: 'William Shakespeare'
};
export default App;