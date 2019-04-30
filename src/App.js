import React from 'react';
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
        if (quotes.length !== 0) {
            this.setState({
                quoteText: quotes[this.getRandom(quotes)].quoteText,
                quoteAuthor: quotes[this.getRandom(quotes)].quoteAuthor
            });
        }
    }
    componentDidMount() {
        const xhr = new XMLHttpRequest();
        const URL = 'https://www.mocky.io/v2/5cbc3d51320000d90c80d836';
        xhr.open('GET', URL, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return false
            }
            if (xhr.status !== 200) {
                this.handleError(xhr.status + ': ' + xhr.statusText);
            } else {
                const data = JSON.parse(xhr.responseText);
                this.handleSuccess(data);
            }
        };
    }
    render() {
        return (
            <div className="quote-box">
                <QuoteText className="quote-text" quoteText={this.state.quoteText} icon="fa fa-quote-left"/>
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
            </div>
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