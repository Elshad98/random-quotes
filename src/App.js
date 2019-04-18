import React from 'react';
import PropTypes from 'prop-types';

import Link from './components/Link';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: this.props.icons
        };
    }

    componentDidMount() {
               
    }

    render() {
        return (
            <main className="quote-box">
                <div className="quote-text">
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                    <span>Not everything that can be counted counts, and not everything that counts can be counted.</span>
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
